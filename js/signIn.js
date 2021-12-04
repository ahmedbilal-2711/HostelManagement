let ms = require("mssql");
let connectionStr={
    serverName:'AHMED\SQLEXPRESS',
    database:'SampleDataLab',
    user:"",
    password:""
}

function getData() {
    let con = new ms.connect(connectionStr);
    let req = new ms.Request(con);
    con.connect(function(err){
        if (err) {
            console.log(err);
            return;
        }
        req.query("Select * from Customer",function(err,data){
            if (err) {
                console.log(err);
                return;
            }
            else{
                console.log(data);
            }
            con.close();
        })
    })
}

getData();