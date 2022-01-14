    var mixed = document.getElementById('monthlyBills').getContext('2d');
    var pie = document.getElementById('attendance').getContext('2d');
    // console.log(new Date().getFullYear());
    // Chart.defaults.scale.ticks.beginAtZero=true;
    var mixedChart = new Chart(mixed,{
    type : 'bar',
    data : {
    labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label:'PKR per month in '+new Date().getFullYear(),
      borderColor: 'black',
      borderWidth:2,
      backgroundColor : 'purple',
      fillColor: "rgba(255,255,255)", 
      data: ["1", "20", "30","40","30","60","80","50","90","100","101","120"]
    }]},
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Monthly Bills',
            font: {
              size: 34
          }
        }
      },
      plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
      }
  }
  });
    var pieChart = new Chart(pie,{
    type : 'doughnut',
    data : {
    labels: ['Present', 'Absent'],
    datasets: [{
      label:'Attendace per month',
      borderColor: 'black',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      borderWidth:2,
      // backgroundColor : 'purple',
      fillColor: "rgba(255,255,255)", 
      data: ["1", "20"]
    }]},
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Monthly Bills',
            font: {
              size: 34
          }
        }
      },
      plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
      }
  }
  });


// Attendance - in dashboard form
function Calander() {
  let timedate = new Date();
  let date = timedate.toDateString();
  let time = timedate.toTimeString().slice(0,8);
  document.getElementById("time").innerHTML=time;
  document.getElementById("date").innerHTML=date;
}
setInterval(Calander,1000);

presentButton=document.getElementById("markPres");
presentButton.addEventListener('click', (e)=>{
  let timedate = new Date();
  // console.log();
  if (timedate.getHours()==23 && timedate.getMinutes()<59) {
    console.log("dfjhdj");
    document.getElementById("attendanceMark").style.borderColor='green';
  }
  else{
    alert("You can mark your attendance between 2100hrs and 2200hrs")
    document.getElementById("attendanceMark").style.borderColor='red';
  }
});
