//******* DROPDOWN MENU IN THE NAVBAR *********//

//When window resizes - if it's desktop view, dropdown works on mouseenter, it changes to click when on tablet / mobile
const dropdownArea = document.getElementById("dropdown-control");
let isMobile, prevEvent;


window.addEventListener("load", dropdownHandler); 
window.addEventListener("resize", dropdownHandler); 

//Handles  actions for updating dropdown control
function dropdownHandler() {
  isMobile = window.matchMedia("(max-width: 790px)"); 
  dropdownControl(isMobile.matches);
}

//Controls which event dropdown menu reacts to, depending on screen size
function dropdownControl(isMobile) {
  let newEvent; 
  dropdownArea.removeEventListener(prevEvent, performDropdownHanlder); 
  
  if (isMobile) {
    newEvent = "click";
    
  } else {
    newEvent = "mouseenter"; 

  }
  
  prevEvent = newEvent;
  //When event is determined, perform necessary dropdown action
 // dropdownArea.addEventListener(newEvent, performDropdownHanlder); 
  
}


//Actual dropdown actions 
function performDropdownHanlder(event){
   
   let d = event.currentTarget;
   d.style.backgroundColor = "gold";
   
}

