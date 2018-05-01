const video = document.querySelector(".hero-video__file");

video.addEventListener("click", toggleVideoMute);
window.addEventListener("scroll", handleScroll);

video.autoplay = true;
video.loop = true;
video.volume = 0.1;
video.muted = true;

function toggleVideoMute() {
  video.muted = !video.muted;
}

function pauseVideo() {
  if (!video.paused) {
    setTimeout(function() {
      video.pause();
    }, 500);
  }
}

function resumeVideo() {
  if (video.paused) {
    setTimeout(function() {
      video.play();
    }, 500);
  }
}

function handleScroll(e) {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 350) {
    pauseVideo();
  } else {
    resumeVideo();
  }
}
