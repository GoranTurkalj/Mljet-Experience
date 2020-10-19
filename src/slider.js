//Using GlideJS Library
import Glide from "@glidejs/glide";

const glide = new Glide(".glide", {
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
      perView: 1.75,
    },
    1300: {
      perView: 1.5,
    },
    1000: {
      perView: 1.3,
    },
    790: {
      perView: 1,
    },
  },
}).mount();

// //Gets all bullets from slider
// function getBullets() {
//   const bullets = Array.from(document.querySelectorAll(".glide__bullet"));
//   for (const bullet of bullets) {
//     if (bullet.classList.contains("glide__bullet--active")) {
//       const currIndex = bullets.indexOf(bullet);

//       //Return an object containing bullet and its index
//       return { el: bullet, index: currIndex, arrLength: bullets.length };
//     }
//   }
// }

// //Previous active bullet
// let prevBullet;

// //Runs before transition begins
// glide.on("move", () => {
//   //Get currently active bullet
//   prevBullet = getBullets();
// });

// //Runs after every transition is finished.
// glide.on("move.after", () => {
//   if (prevBullet) {
//     const span = prevBullet.el.querySelector("span");
//     if (span) span.remove();
//   }

//   const activeBullet = getBullets();
//   let span = document.createElement("span");

//   //Check if active bullet has bigger index than previous bullet and change direction of pointer to left or right

//   if (
//     (prevBullet &&
//       activeBullet.index > prevBullet.index &&
//       activeBullet.index < activeBullet.arrLength - 1) ||
//     !prevBullet ||
//     activeBullet.index === 0
//   ) {
//     span.classList.add("pointer");
//   } else if (
//     (prevBullet && activeBullet.index < prevBullet.index) ||
//     activeBullet.index === activeBullet.arrLength - 1
//   ) {
//     span.classList.add("pointer", "pointer--left");
//   }

//   console.log("active index", activeBullet.index);
//   console.log(activeBullet.arrLength);
//   activeBullet.el.append(span);
// });
