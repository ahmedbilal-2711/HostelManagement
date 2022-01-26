var pie = document.getElementById("attendance").getContext("2d");
window.onload = attendance;
// window.onload=billsHistory;
function attendance() {
  console.log("Attendance function called");
  fetch("/attendance")
    .then((res) => res.json())
    .then((data) => {
      var pieChart = new Chart(pie, {
        type: "doughnut",
        data: {
          labels: ["Present", "Absent"],
          datasets: [
            {
              label: "Attendace per month",
              borderColor: "black",
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              borderWidth: 2,
              // backgroundColor : 'purple',
              fillColor: "rgba(255,255,255)",
              data: [data[1].NOD, data[0].NOD],
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Monthly Bills",
              font: {
                size: 34,
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "rgb(255, 99, 132)",
              },
            },
          },
        },
      });
      p = data[0].present;
      a = data[0].absent;
    });
  getStdDetails();
}

function getStdDetails() {
  fetch("/showStdDetails")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").innerHTML =
        data[0].FIRST_NAME + " " + data[0].LAST_NAME;
      document.getElementById("id").innerHTML = data[0].ID;
      document.getElementById("discipline").innerHTML = data[0].DISCIPLINE;
      document.getElementById("pcno").innerHTML = data[0].PCNO;
      document.getElementById("cnic").innerHTML = data[0].CNIC;
    });
}

// Attendance - in dashboard form
function Calander() {
  let timedate = new Date();
  let date = timedate.toDateString();
  let time = timedate.toTimeString().slice(0, 8);
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}
setInterval(Calander, 1000);

presentButton = document.getElementById("markPres");
presentButton.addEventListener("click", (e) => {
  let timedate = new Date();
  // console.log();
  if (timedate.getHours() == 23 && timedate.getMinutes() < 59) {
    console.log("dfjhdj");
    document.getElementById("attendanceMark").style.borderColor = "green";
    document.getElementById("dateinput").value = timedate.toDateString();
    document.getElementById("statusinput").value = "P";
  } else {
    alert("You can mark your attendance between 2100hrs and 2200hrs");
    document.getElementById("attendanceMark").style.borderColor = "red";
    document.getElementById("dateinput").value = timedate.toDateString();
    document.getElementById("statusinput").value = "A";
  }
});
