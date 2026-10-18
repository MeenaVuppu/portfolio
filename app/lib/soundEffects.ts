export const INTERACTION_TICK_SRC = "/loading-pin-click.wav";

// One persistent interaction player, independent of headphone/music audio.
let navigationClickAudio: HTMLAudioElement | null = null;
let navigationClickPreloaded = false;
const interactionTickListeners = new Set<() => void>();
type SoundPreference = "enabled" | "disabled";
let soundPreference: SoundPreference | null = null;
let soundPreferenceLoaded = false;

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
  getNavigationClickAudio().load();
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
  const audio = getNavigationClickAudio();
  if (isInteractionTickMuted()) return;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = interactionTickVolume();
  void audio.play().catch(() => undefined);
}
