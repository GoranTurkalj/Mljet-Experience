//Selecting elements and control variable.
const hamburgerBtn = document.getElementById("hamburger");
const hamburgerSvg = document.getElementById("hamburger-svg");
const nav = document.getElementById("main-nav");
let menuOpened = false;

window.addEventListener("resize", () => {
  if (!checkMobile()) closeMobileMenu();
});

//Adding event handlers to hamburger button and the nav element
hamburgerBtn.addEventListener("click", (event) => {
  mobileMenuHandler(event.currentTarget);
});

nav.addEventListener("click", (event) => {
  mobileMenuHandler(event.target);
});

//Handles mobile menu in different contexts
function mobileMenuHandler(el) {
  const isMobile = checkMobile();
  //Action when hamburger button is clicked
  if (isMobile && el.id === "hamburger") {
    if (menuOpened) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
    //Action when links in navbar are clicked.
  } else if (isMobile && el.tagName === "A" && el.id !== "zanimljivosti") {
    closeMobileMenu();
  }
}

function openMobileMenu() {
  menuOpened = true;
  hamburgerSvg.classList.add("hamburger-opened");
  nav.classList.add("main-nav--opened");
  document.body.classList.add("body-fixed");
}

function closeMobileMenu() {
  menuOpened = false;
  nav.classList.add("main-nav--closed");
  hamburgerSvg.classList.remove("hamburger-opened");
  nav.style.pointerEvents = "none";
  hamburgerBtn.style.pointerEvents = "none";
  setTimeout(() => {
    nav.classList.remove("main-nav--closed", "main-nav--opened");
    nav.style.pointerEvents = "auto";
    hamburgerBtn.style.pointerEvents = "auto";
  }, 500);

  document.body.classList.remove("body-fixed");
}

function checkMobile() {
  return window.matchMedia("(max-width: 54.375rem)").matches;
}
