// Editable Table Made
let t = document.getElementById("table");
t.addEventListener("click", (e) => {
  let check = document.getElementById("fname");
  let val = e.target.innerHTML;
  let height = document.getElementsByTagName("TH")[0].clientHeight;
  let width = document.getElementsByTagName("TH")[0].clientWidth;
  console.log(height);
  console.log(width);
  if (e.target.outerHTML === `<th>${val}</th>`) {
  } else {
    if (check === null) {
      // let v=e.target.outerHTML;
      // let val=e.target.innerHTML;
      e.target.outerHTML = `<input type="text" id="fname" name="fname" value="${val}"></input>`;
      let cell = document.getElementById("fname");
      setTimeout(() => {
        cell.style.height = "243px";
        cell.style.height = "40px";
        // cell.style.padding='5px'
        cell.style.backgroundColor = "rgba(255, 255, 255, 0.089)";
        cell.focus();
      }, 5);
    } else {
      let cell = document.getElementById("fname");
      setTimeout(() => {
        alert("Press Enter to continue");
        cell.focus();
      }, 5);
    }
  }
});

t.addEventListener("keypress", (e) => {
  // console.log(e.target.value);
  if (e.key === "Enter") {
    let val = e.target.value;
    e.target.outerHTML = `<td>${val}</td>`;
  }
});
window.onload = showData;
var M1= document.getElementById("M_1");
var M2= document.getElementById("M_2");
var M3= document.getElementById("M_3");
var M4= document.getElementById("M_4");
var M5= document.getElementById("M_5");
var M6= document.getElementById("M_6");
var M7= document.getElementById("M_7");

var TU1= document.getElementById("TU_1");
var TU2= document.getElementById("TU_2");
var TU3= document.getElementById("TU_3");
var TU4= document.getElementById("TU_4");
var TU5= document.getElementById("TU_5");
var TU6= document.getElementById("TU_6");
var TU7= document.getElementById("TU_7");

var W1= document.getElementById("W_1");
var W2= document.getElementById("W_2");
var W3= document.getElementById("W_3");
var W4= document.getElementById("W_4");
var W5= document.getElementById("W_5");
var W6= document.getElementById("W_6");
var W7= document.getElementById("W_7");

var T1= document.getElementById("T_1");
var T2= document.getElementById("T_2");
var T3= document.getElementById("T_3");
var T4= document.getElementById("T_4");
var T5= document.getElementById("T_5");
var T6= document.getElementById("T_6");
var T7= document.getElementById("T_7");


var F1= document.getElementById("F_1");
var F2= document.getElementById("F_2");
var F3= document.getElementById("F_3");
var F4= document.getElementById("F_4");
var F5= document.getElementById("F_5");
var F6= document.getElementById("F_6");
var F7= document.getElementById("F_7");


var SA1= document.getElementById("SA_1");
var SA2= document.getElementById("SA_2");
var SA3= document.getElementById("SA_3");
var SA4= document.getElementById("SA_4");
var SA5= document.getElementById("SA_5");
var SA6= document.getElementById("SA_6");
var SA7= document.getElementById("SA_7");

var SU1= document.getElementById("SU_1");
var SU2= document.getElementById("SU_2");
var SU3= document.getElementById("SU_3");
var SU4= document.getElementById("SU_4");
var SU5= document.getElementById("SU_5");
var SU6= document.getElementById("SU_6");
var SU7= document.getElementById("SU_7");

console.log(M1.innerText);


function showData() {
  console.log("running timetable fetch");
  fetch("/timetable")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    });
}
