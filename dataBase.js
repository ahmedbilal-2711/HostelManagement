let express = require("express");
let app = express();
app.use(express.urlencoded({extented:true}));

app.use(express.static(__dirname));

// Database Connection
const { default: knex } = require("knex");
var sql = require("mssql");
const cors = require("cors")
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

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
    // pool.query`insert into Customer VALUES ('AA51','Muneeb','Aslam','Lr','Lr','Lr','4580',420.56)`;
    return pool.query`select * FROM Customer`
}).then(result => {
    // console.dir(result);
    console.log(result.recordsets[0]);
    // console.log( result.recordsets[0])
    module.exports.check=result.recordset[0];
    database.close();
})
  .catch((err) => {
    console.log(err);
  });

  
app.use(cors(corsOpts));
app.listen(5000, function(){
    console.log("running");
});












