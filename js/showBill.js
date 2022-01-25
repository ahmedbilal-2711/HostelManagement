window.onload = showBill;

function showBill() {
  console.log("fetch bills called");
  fetch("/showHostelBill")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("rr").innerHTML = data[0].ROOM_RENT;
      document.getElementById("gas").innerHTML = data[0].GAS;
      document.getElementById("elec").innerHTML = data[0].ELECTRICITY;
      document.getElementById("water").innerHTML = data[0].WATER;
      document.getElementById("rc").innerHTML = data[0].BEARER_CHARGES;
      document.getElementById("f").innerHTML = data[0].FINE;
      document.getElementById("laundary").innerHTML = data[0].LAUNDARY;
      document.getElementById("mess").innerHTML = data[0].MESS;
      document.getElementById("arr").innerHTML = data[0].ARREARS;
      document.getElementById("dd").innerHTML = data[0].DUE_DATE.substring(
        0,
        10
      );
      document.getElementById("ss").innerHTML = data[0].STATUS;
      document.getElementById("amm").innerHTML =
        data[0].ROOM_RENT +
        data[0].GAS +
        data[0].ELECTRICITY +
        data[0].WATER +
        data[0].BEARER_CHARGES +
        data[0].FINE +
        data[0].LAUNDARY +
        data[0].MESS +
        data[0].ARREARS;
      console.log(data);
    });
}
