/* // Database Connection
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
};
var database = new sql.ConnectionPool(config);
database
  .connect()
  .then(pool => {
    // pool.query`insert into Customer VALUES ('AA55','Ali','Bilal','Kh','Kh','Kh','4578',450.56)`;
    return pool.query`select * FROM Customer`
}).then(result => {
    console.dir(result);
    database.close();
})
  .catch((err) => {
    console.log(err);
  }); */
  
// BackEnd
let express = require("express");
let app = express();
app.use(express.urlencoded({extented:true}));

app.use(express.static(__dirname));

app.get('/',function(req,res){
     res.sendFile(__dirname + "/html/index.html");
});

app.post('/',function (req,res) {
  console.log(" brwa");
    console.log(req.body);
    console.log(req.body.em);
    console.log(req.body.pass);
    res.sendFile(__dirname + '/html/bioForm.html');
});


app.listen(3000, function(){
    console.log("running");
});












