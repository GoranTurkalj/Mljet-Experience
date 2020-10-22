const hamburgerBtn = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

hamburgerBtn.addEventListener("click", mobileMenuHandler);

//mobileMenuHandler

function mobileMenuHandler(){

   nav.classList.toggle("main-nav--opened");
    
}