// Database Connection
const { default: knex } = require("knex");
var sql = require("mssql");
var config = {
  user: "root",
  password: "686332",
  server: "MUNEEB",
  database: "Project",
  port: 1433,
  options: {
    encrypt: false,
    useUTC: true,
  },
};


var database = new sql.ConnectionPool(config);
let lastid;
//  Getting last id of student from database
database.connect()
.then(pool => {
  // pool.query`insert into Customer VALUES ('AA55','Ali','Bilal','Kh','Kh','Kh','4578',450.56)`;
  lastid=pool.query`SELECT TOP 1 ID FROM Student ORDER BY ID DESC`;
  return lastid
}).then(result => {
    let len=(parseInt(result.recordset[0].ID.slice(1,8))+1).toString().length;
    
  console.log(result.recordset[0].ID.replace(result.recordset[0].ID.slice(8-len,8),parseInt(result.recordset[0].ID.slice(1,8))+1).toString())
})
.catch((err) => {
  console.log(err);
}); 


let express = require("express");
let app = express();
app.use(express.urlencoded({extented:true}));
app.use(express.static(__dirname));

// Getting the data from bio form insert into the table 
  app.post('/signup',async (req,res)=> {
      console.log("post");
    console.log(req.body);

    // const result = await database.connect().then(pool=>{

    //     return pool.query`SELECT TOP 1 ID FROM Student ORDER BY ID DESC `

    // }).then(result=>{
    //     let len=(parseInt(result.recordset[0].ID.slice(1,8))+1).toString().length;
    //     let sid=result.recordset[0].ID.replace(result.recordset[0].ID.slice(8-len,8),parseInt(result.recordset[0].ID.slice(1,8))+1).toString();
    //     res.sendFile(__dirname + "/html/index.html")
    //     database.close();
    // }).catch((err) => {
    //     console.log(err);
    //   });

    // database.connect().then(pool=>
    //     {
    //          pool.query`exec signupDetails 's0000002','8110207692761','Muneeb','Aslam','M Aslam','05-dec-2000','Bhimber','686332','Near DHO Hospital Bhimber','03038707601','891','03419227658','CSE','3' `
    //     })
});

app.listen(3001, function(){
    console.log("running");
});