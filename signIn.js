/* const { request } = require('http');
const sql = require('mssql');
const config = {
    servername:'AHMED\\SQLEXPRESS',
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

getData(); */

const { default: knex } = require("knex");
var sql = require("mssql");
var config = {
  user: "HostelDb",
  password: "hmdb",
  server: "AHMED\\SQLEXPRESS",
  database: "SampleDataLab",
  port: 1434,
  options: {
    encrypt: false,
    useUTC: true,
  },

  pool: {
  /*   max: 100,
    min: 0,
    idleTimeoutMillis: 3600000,
    connectionTimeout: 3600000,
    requestTimeout: 3600000, */
  },
};
var database = new sql.ConnectionPool(config);

database
  .connect()
  .then(function () {
    console.log("connected");
    database.query("SELECT * FROM Employee",function (err,data) {
        if (err) {
          console.log(err);
        }
        else{
          console.log(data);
        }
    })
    database.close();
  })
  .catch((err) => {
    console.log(err);
  });

/* let express = require("express");
let app = express();
app.use(express.urlencoded({extented:true}));

app.use(express.static(__dirname));

app.post('/',function (req,res) {
    console.log(req.body);
    console.log(req.body.em);
    console.log(req.body.pass);
    res.sendFile('../html/bioForm.html')
});

app.get('/',function(req,res){
    res.sendFile(__dirname + "/html/index.html");

});

app.listen(5540, function(){
    console.log("kdjfkjfkd");
}); */












