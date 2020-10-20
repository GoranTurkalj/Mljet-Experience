export function calcWindowWidth(){
    return window.innerWidth;
}


export function determineDevice(windowWidth) {

   if (windowWidth > 790) {
     console.log("THIS IS DESKTOP");
     return false; 
   } else {
     console.log("THIS IS TABLET / MOBILE");
     return true; 
   }

}