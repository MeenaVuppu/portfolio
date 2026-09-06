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
