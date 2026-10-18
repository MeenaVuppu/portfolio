export const INTERACTION_TICK_SRC = "/loading-pin-click.wav";

// One persistent interaction player, independent of headphone/music audio.
let navigationClickAudio: HTMLAudioElement | null = null;
let navigationClickPreloaded = false;
const interactionTickListeners = new Set<() => void>();

export function subscribeToInteractionTicks(listener: () => void) {
  interactionTickListeners.add(listener);
  return () => { interactionTickListeners.delete(listener); };
}

function getNavigationClickAudio() {
  navigationClickAudio ??= new Audio(INTERACTION_TICK_SRC);
  navigationClickAudio.preload = "auto";
  return navigationClickAudio;
}

export function preloadInteractionTick() {
  if (navigationClickPreloaded) return;
  getNavigationClickAudio().load();
  navigationClickPreloaded = true;
}

export function isInteractionTickMuted() {
  return navigationClickAudio?.muted ?? false;
}

export function interactionTickVolume() {
  return window.matchMedia("(max-width: 760px)").matches ? 0.32 : 0.4;
}

export function playInteractionTick() {
  // Intentional interactions take priority over any remaining loading ticks.
  interactionTickListeners.forEach((listener) => listener());
  const audio = getNavigationClickAudio();
  if (audio.muted) return;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = interactionTickVolume();
  void audio.play().catch(() => undefined);
}
