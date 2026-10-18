export const INTERACTION_TICK_SRC = "/loading-pin-click.wav";

// One persistent interaction player, independent of headphone/music audio.
let navigationClickAudio: HTMLAudioElement | null = null;
let navigationClickPreloaded = false;

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
  const audio = getNavigationClickAudio();
  if (audio.muted) return;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = interactionTickVolume();
  void audio.play().catch(() => undefined);
}
