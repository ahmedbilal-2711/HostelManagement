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
      document.getElementById("dd").innerHTML = data[0].DUE_DATE;
      document.getElementById("amm").innerHTML = data[0].AMOUNT;
      console.log(data);
    });
}
