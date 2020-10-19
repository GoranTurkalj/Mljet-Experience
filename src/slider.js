//Using GlideJS Library
import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "slider",
  rewind: true,
  startAt: 1,
  perView: 1.98,
  focusAt: "center",
  animationDuration: 1500,
  gap: 0,
  breakpoints: {
    1920: {
      perView: 1.98, 
    }, 
    1600: {
      perView: 1.75
    },
    1300: {
      perView: 1.5
    }, 
    1000: {
      perView: 1.3
    },
    790: {
      perView: 1
    }
  }
  
 

}).mount();

console.log("Hello from slider.js");
