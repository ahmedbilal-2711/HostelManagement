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

module.exports=config;












