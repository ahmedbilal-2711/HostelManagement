// Database Connection
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
/* database
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


// Validation done
app.post('/signin',function (req,res) {
    /* console.log(req.body);
    console.log(req.body.em);
    console.log(req.body.pass); */
    database.connect().then(pool=>{
        return pool.query`SELECT stdName from studentproj WHERE pass= ${req.body.pass} AND id=${req.body.em}`
    }).then(result=>{
        if (result.recordset.length>0) {
            res.sendFile(__dirname + "/html/navBar.html")
        }
        else{
            res.sendFile(__dirname + "/html/index.html");
        }
        database.close();
    }).catch((err) => {
        console.log(err);
      });
});


app.get('/attendance', async (req, res) => {
    let id = '2@2.com';
    const result = await database.connect().then(pool=>{
        return pool.query`SELECT present,absent from attproj WHERE id=${id}`
    }).then(result=>{
        console.log( result);
        res.send(result.recordset);
        database.close();
    }).catch((err) => {
        console.log(err);
      });
    
});


app.listen(3001, function(){
    console.log("running");
});