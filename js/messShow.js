window.onload = showData;
// document.getElementById('m1')
function showData() {
  console.log("running mess fetch");
  fetch("/messTableShow")
    .then((res) => res.json())
    .then((data) => {
      if (data[0].DAYS === `Monday`) {
        document.getElementById("m1").innerHTML = data[0].BREAKFAST;
        document.getElementById("m2").innerHTML = data[0].LUNCH;
        document.getElementById("m3").innerHTML = data[0].DINNER;
      }
      if (data[1].DAYS === `Tuesday`) {
        document.getElementById("t1").innerHTML = data[1].BREAKFAST;
        document.getElementById("t2").innerHTML = data[1].LUNCH;
        document.getElementById("t3").innerHTML = data[1].DINNER;
      }
      if (data[2].DAYS === `Wednesday`) {
        document.getElementById("w1").innerHTML = data[2].BREAKFAST;
        document.getElementById("w2").innerHTML = data[2].LUNCH;
        document.getElementById("w3").innerHTML = data[2].DINNER;
      }
      if (data[3].DAYS === `Thursday`) {
        document.getElementById("th1").innerHTML = data[3].BREAKFAST;
        document.getElementById("th2").innerHTML = data[3].LUNCH;
        document.getElementById("th3").innerHTML = data[3].DINNER;
      }
      if (data[4].DAYS === `Friday`) {
        document.getElementById("f1").innerHTML = data[4].BREAKFAST;
        document.getElementById("f2").innerHTML = data[4].LUNCH;
        document.getElementById("f3").innerHTML = data[4].DINNER;
      }
      if (data[5].DAYS === `Saturday`) {
        document.getElementById("s1").innerHTML = data[5].BREAKFAST;
        document.getElementById("s2").innerHTML = data[5].LUNCH;
        document.getElementById("s3").innerHTML = data[5].DINNER;
      }
      if (data[6].DAYS === `Sunday`) {
        document.getElementById("su1").innerHTML = data[6].BREAKFAST;
        document.getElementById("su2").innerHTML = data[6].LUNCH;
        document.getElementById("su3").innerHTML = data[6].DINNER;
      }
    });
}
