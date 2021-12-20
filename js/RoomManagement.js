const flat=document.querySelectorAll(".heading");

function transition(){

    prompt("hello");
}

flat.forEach(function() {
    transition();
  });


flat.addEventListener("click",transition);