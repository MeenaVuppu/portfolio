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

// Separate from loading-reveal audio and the page-turn sound on other surfaces.
let projectFolderAudio: HTMLAudioElement | null = null;

function getProjectFolderAudio() {
  projectFolderAudio ??= new Audio("/project-folder-click.wav");
  projectFolderAudio.preload = "auto";
  return projectFolderAudio;
}

export function preloadProjectFolderSound() {
  getProjectFolderAudio().load();
}

export function playProjectFolderSound() {
  const audio = getProjectFolderAudio();
  audio.pause();
  audio.currentTime = 0;
  audio.muted = false;
  audio.volume = 0.32;
  void audio.play().catch(() => undefined);
}
