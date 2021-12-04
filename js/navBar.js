// Setting the height of the iframe- Our screen
let heightScreen = window.innerHeight;
let orgHeight=document.getElementById("navBarUl").offsetHeight;
let orgHeightTop=document.getElementById("topBar").offsetHeight;
document.getElementById("navBarUl").style.paddingBottom=(heightScreen-orgHeight-orgHeightTop)+"px";