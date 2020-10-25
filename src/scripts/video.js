//Select play button
const playBtn = document.getElementById("play-btn");

//  This code loads the Iframe Player API code asynchronously.
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "HWbHFiGLqnU",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
    playerVars: {
      modestbranding: 1,
      autoplay: 1,
      fs: 0,
      iv_load_policy: 3,
      rel: 0
    },
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  //Here the play button is removed
  playBtn.style.display = "none"; 
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
  if (event.data === 0) {
    console.log("VIDEO IS DONE.");
    player.destroy();
  //Here the play button shows up again
  playBtn.style.display = "inline"; 
  }
}

function stopVideo() {
  player.stopVideo();
}

//On clicking the PLAY button - the player object is created
playBtn.addEventListener("click", (event) => { 
  onYouTubeIframeAPIReady();
  event.target.setAttribute("disabled", "disabled"); 
  setTimeout(()=>{
    event.target.removeAttribute("disabled"); 
  }, 1500); 
 
});

