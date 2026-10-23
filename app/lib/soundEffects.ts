export const INTERACTION_TICK_SRC = "/loading-pin-click.wav";

// One persistent interaction player, independent of headphone/music audio.
let navigationClickAudio: HTMLAudioElement | null = null;
let navigationClickPreloaded = false;
const interactionTickListeners = new Set<() => void>();
type SoundPreference = "enabled" | "disabled";
let soundPreference: SoundPreference | null = null;
let soundPreferenceLoaded = false;
type TickAudio = { context: AudioContext; gain: GainNode; buffer: AudioBuffer | null; ready: Promise<void> };
let tickAudio: TickAudio | undefined;
let activeTick: AudioBufferSourceNode | null = null;
let tickRequest = 0;
let gesturePrimed = false;

function loadTickBuffer(audio: TickAudio) {
  return fetch(INTERACTION_TICK_SRC)
    .then(response => { if (!response.ok) throw new Error("Tick audio unavailable"); return response.arrayBuffer(); })
    .then(bytes => audio.context.decodeAudioData(bytes))
    .then(buffer => { audio.buffer = buffer; })
    .catch(() => undefined);
}

// Loading and interaction ticks share the context unlocked by a real gesture.
// In particular, a settled drop runs after that gesture's event has finished.
export function getInteractionTickAudio(): TickAudio | undefined {
  if (tickAudio) return tickAudio;
  const Constructor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Constructor) return;
  try {
    const context = new Constructor();
    const gain = context.createGain();
    gain.gain.value = isInteractionTickMuted() ? 0 : interactionTickVolume();
    gain.connect(context.destination);
    const audio: TickAudio = { context, gain, buffer: null, ready: Promise.resolve() };
    audio.ready = loadTickBuffer(audio);
    tickAudio = audio;
    return audio;
  } catch { /* Use the existing media player if Web Audio is unavailable. */ }
}

export function unlockInteractionTick() {
  if (isInteractionTickMuted()) return;
  const audio = getInteractionTickAudio();
  if (audio && !gesturePrimed && window.navigator?.userActivation?.isActive) {
    // Start a silent frame inside the gesture, not in the delayed drop callback.
    // Some mobile audio engines need a source start as well as resume().
    try {
      const source = audio.context.createBufferSource();
      source.buffer = audio.context.createBuffer(1, 1, audio.context.sampleRate);
      source.connect(audio.context.destination);
      source.onended = () => source.disconnect();
      source.start();
      gesturePrimed = true;
    } catch { /* A blocked gesture can be retried on the next interaction. */ }
  }
  if (audio && window.navigator?.userActivation?.isActive) {
    // A failed fetch/decode must not permanently silence later gestures.
    audio.ready = audio.ready.then(() => audio.buffer ? undefined : loadTickBuffer(audio));
  }
  if (audio && audio.context.state !== "running" && audio.context.state !== "closed") {
    void audio.context.resume().catch(() => undefined);
  }
}

export function getInteractionSoundPreference() {
  if (!soundPreferenceLoaded) {
    soundPreferenceLoaded = true;
    try {
      const saved = window.localStorage.getItem("portfolio-interaction-sound");
      if (saved === "enabled" || saved === "disabled") soundPreference = saved;
      else if (window.localStorage.getItem("portfolio-sound-prompt") === "enabled") soundPreference = "enabled";
      // An old prompt dismissal was not a mute choice; do not migrate it as one.
    } catch { /* Storage restrictions must not prevent interaction. */ }
  }
  return soundPreference;
}

export function setInteractionSoundEnabled(enabled: boolean) {
  soundPreferenceLoaded = true;
  soundPreference = enabled ? "enabled" : "disabled";
  tickRequest++;
  if (tickAudio) tickAudio.gain.gain.value = enabled ? interactionTickVolume() : 0;
  if (!enabled && activeTick) { activeTick.stop(); activeTick = null; }
  if (enabled) unlockInteractionTick();
  if (navigationClickAudio) {
    navigationClickAudio.muted = !enabled;
    if (!enabled) navigationClickAudio.pause();
  }
  try { window.localStorage.setItem("portfolio-interaction-sound", soundPreference); } catch { /* Retain the session choice. */ }
}

export function subscribeToInteractionTicks(listener: () => void) {
  interactionTickListeners.add(listener);
  return () => { interactionTickListeners.delete(listener); };
}

function getNavigationClickAudio() {
  if (!navigationClickAudio) {
    navigationClickAudio = new Audio(INTERACTION_TICK_SRC);
    navigationClickAudio.muted = getInteractionSoundPreference() === "disabled";
  }
  navigationClickAudio.preload = "auto";
  return navigationClickAudio;
}

export function preloadInteractionTick() {
  if (navigationClickPreloaded) return;
  if (!getInteractionTickAudio()) getNavigationClickAudio().load();
  navigationClickPreloaded = true;
}

export function isInteractionTickMuted() {
  return getInteractionSoundPreference() === "disabled" || (navigationClickAudio?.muted ?? false);
}

export function interactionTickVolume() {
  return window.matchMedia("(max-width: 760px)").matches ? 0.32 : 0.4;
}

export function playInteractionTick() {
  // Intentional interactions take priority over any remaining loading ticks.
  interactionTickListeners.forEach((listener) => listener());
  if (isInteractionTickMuted()) return;
  const shared = getInteractionTickAudio();
  if (shared) {
    const request = ++tickRequest;
    const requestedAt = window.performance.now();
    const resume = shared.context.state === "running" ? Promise.resolve() : shared.context.resume();
    void Promise.all([shared.ready, resume]).then(() => {
      // A blocked or slow request must never replay after a later interaction.
      if (request !== tickRequest || window.performance.now() - requestedAt > 500 ||
          isInteractionTickMuted() || shared.context.state !== "running" || !shared.buffer) return;
      if (activeTick) activeTick.stop();
      const source = shared.context.createBufferSource();
      source.buffer = shared.buffer;
      shared.gain.gain.value = interactionTickVolume();
      source.connect(shared.gain);
      source.onended = () => { source.disconnect(); if (activeTick === source) activeTick = null; };
      activeTick = source;
      source.start();
    }).catch(() => undefined);
    return;
  }
  const audio = getNavigationClickAudio();
  audio.pause();
  audio.currentTime = 0;
  audio.volume = interactionTickVolume();
  void audio.play().catch(() => undefined);
}
