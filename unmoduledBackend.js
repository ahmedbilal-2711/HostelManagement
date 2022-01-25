// Database Connection
const { default: knex } = require("knex");
var sql = require("mssql");
var config = {
  user: "HostelDb",
  password: "hmdb",
  server: "AHMED\\SQLEXPRESS",
  database: "hmdb",
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
var bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extented: true }));

// const Null = require("tedious/lib/data-types/null");
app.use(express.urlencoded({ extented: true }));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

var user;
// Validation done
app.post("/signin", async (req, res) => {
  user = req.body.em;
  /* console.log(req.body);
    console.log(req.body.em);
    console.log(req.body.pass); */
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT FIRST_NAME from Hostelites WHERE PASSWORD= ${req.body.pass} AND ID=${req.body.em}`;
    })
    .then((result) => {
      if (result.recordset.length > 0 && req.body.em.includes("s")) {
        res.sendFile(__dirname + "/html/navBar.html");
        // res.json({ id: req.body.em });
      } else if (result.recordset.length > 0 && req.body.em.includes("m")) {
        res.sendFile(__dirname + "/html/navBarManagment.html");
      } else {
        res.sendFile(__dirname + "/html/index.html");
      }
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/expenses", async (req, res) => {
  console.log(req);
});
app.post("/signup", async (req, res) => {
  console.log(req);
});

// Attendance data for student dashboard
app.get("/attendance", async (req, res) => {
  let id = "s0000001";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`attendancecalculation 's0000001'`;
    })
    .then((result) => {
      console.log("attendance");
      console.log(result);
      // res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Monthly Bills stats for student Dashboard
/* app.get("/monthlybillstats", async (req, res) => {
  let id = "2@2.com";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT * from mbillsproj WHERE id=${id}`;
    })
    .then((result) => {
      // console.log( result);
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
}); */

// Fetch data to show in Mess table
app.get("/messTableShow", async (req, res) => {
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT * from MessSchedule`;
    })
    .then((result) => {
      // console.log("running");
      // console.log(result.recordset);
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Student details fetched from database

app.listen(3001, function () {
  console.log("running");
});
