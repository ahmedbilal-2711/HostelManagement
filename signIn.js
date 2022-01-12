const { request } = require('http');
const sql = require('mssql');
const config = {
    server:'AHMED\\SQLEXPRESS',
    username:'HostelDb',
    password:'hmdb',
    database:'SampleDataLab',
    port:1434
}

function getData() {
    // var conn = new sql.Connection(config);
    sql.connect(config,function (err) {
        if (err) {
            console.log(err);
            return;
        }
        else{
            var req = new sql.Request();
            req.query('SELECT * from Employee',function(err,data){
                if (err) {
                    console.log(err);
                }
                else{
                    console.log(data);
                }
                conn.close();
            })
    
        }
    });
}

getData();