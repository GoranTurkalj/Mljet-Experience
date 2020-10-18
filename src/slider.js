//Using GlideJS Library
import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1.75,
  focusAt: "center",
  gap: 36, 
  animationDuration: 2000,
  //peek - what the hell is that 
 
}).mount();

console.log("Hello from slider.js");
