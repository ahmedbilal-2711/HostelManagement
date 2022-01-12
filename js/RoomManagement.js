const flat1=document.getElementById("flat1");
const flat2=document.getElementById("flat2");
const flat3=document.getElementById("flat3");
const flat4=document.getElementById("flat4");
const flat5=document.getElementById("flat5");
const flat6=document.getElementById("flat6");
const flat7=document.getElementById("flat7");
const flat8=document.getElementById("flat8");
const flat9=document.getElementById("flat9");
const flat10=document.getElementById("flat10");
const flat11=document.getElementById("flat11");

function transition(){
  flat1.style.transitionDuration="3s";

}


// flat.forEach(function() {
//     transition();
//   });


flat1.addEventListener("hover",transition);