// https://www.youtube.com/embed/figIb41iTqc?autoplay=1&modestbranding=1&rel=0&loop=1

//Select iframe element and when play buttons is clicked give a value to it's source attribute.
const videoEl = document.getElementById("video");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", (event) => {
  if (videoEl.getAttribute("src")) {
    videoEl.src = "";
  } else {
    videoEl.src =
      "https://www.youtube.com/embed/HWbHFiGLqnU?autoplay=1&modestbranding=1&rel=0&loop=1";
  }
});
