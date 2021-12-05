let ms = require("mssql");
let connectionStr={
    serverName:'AHMED\\SQLEXPRESS',
    database:'SampleDataLab',
    username:'Ahmed\\Ahmed Bilal Siddiqui'
}

function getData() {
    let con = new ms.connect(connectionStr,function(err) {
        if (err) {
            console.log(err);
        }
        else{
            let req = new ms.Request(con);
            con.connect(function(err){
                if (err) {
                    console.log(err);
                    return;
                }
                req.query("Select * from customer",function(err,data){
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
    });
}

getData();