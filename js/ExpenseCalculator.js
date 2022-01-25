var Expense = document.getElementById("ExpenseInput");
var Amount = document.getElementById("AmountInput");
var table = document.getElementById("table");
var sum=0
var total = document.getElementById("Total")
window.onload = showData;
 
function showData() {
  console.log("running mess fetch");
  fetch("/expenses")
    .then((res) => res.json())
    .then((data) => {
        var row
        for(let i=0;i<data.length;i++){
            var rowCount = table.rows.length;
            row = table.insertRow(rowCount-1);
            row.insertCell(0).innerHTML= data[i].DETAILS;
            row.insertCell(1).innerHTML= data[i].AMOUNT;
            sum=sum+data[i].AMOUNT;
        
        }
        total.innerHTML=sum;
    });
}

