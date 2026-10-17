let pageFlipAudio: HTMLAudioElement | null = null;
let pageFlipAudioPreloaded = false;

function getPageFlipAudio() {
  pageFlipAudio ??= new Audio("/page-flip.mp3");
  pageFlipAudio.preload = "auto";
  return pageFlipAudio;
}

export function preloadPageFlipSound() {
  if (pageFlipAudioPreloaded) return;
  getPageFlipAudio().load();
  pageFlipAudioPreloaded = true;
}

export function playPageFlipSound() {
  const audio = getPageFlipAudio();
  audio.pause();
  audio.currentTime = 0;
  audio.muted = false;
  audio.volume = 0.32;
  void audio.play().catch(() => undefined);
}

// One persistent player for intentional navigation, independent of music/control audio.
let navigationClickAudio: HTMLAudioElement | null = null;
let navigationClickPreloaded = false;

function getNavigationClickAudio() {
  navigationClickAudio ??= new Audio("/navigation-click.wav");
  navigationClickAudio.preload = "auto";
  return navigationClickAudio;
}

export function preloadNavigationClickSound() {
  if (navigationClickPreloaded) return;
  getNavigationClickAudio().load();
  navigationClickPreloaded = true;
}

export function playNavigationClickSound() {
  const audio = getNavigationClickAudio();
  if (audio.muted) return;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = window.matchMedia("(max-width: 760px)").matches ? 0.32 : 0.4;
  void audio.play().catch(() => undefined);
}
