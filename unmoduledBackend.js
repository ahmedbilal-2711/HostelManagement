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

/* const { default: knex } = require("knex");
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
}; */

var database = new sql.ConnectionPool(config);
//  database
//   .connect()
//   .then(pool => {
//     // pool.query`insert into Customer VALUES ('AA55','Ali','Bilal','Kh','Kh','Kh','4578',450.56)`;
//    // return pool.query`select * FROM Customer`
// }).then(result => {
//     console.dir(result);
//     database.close();
// })
//   .catch((err) => {
//     console.log(err);
//   });

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

// Show data in front end of expense calc
app.get("/expenses", async (req, res) => {
  let id = "s0000001";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT * from ExpenseCalculator where ID=${id}`;
    })
    .then((result) => {
      // console.log("running");
      // console.log(result);
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Send data from front end of expense calc to DataBase
app.post("/expensesSendToDB", async (req, res) => {
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`exec ExpenseCalculator_Details ${req.body["Expense"]},${req.body["Amount"]},'s0000001' `;
    })
    .then((result) => {
      res.sendFile(__dirname + "/html/ExpenseCalculator.html");
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Validation done
app.post("/signin", async (req, res) => {
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

app.post("/manager", async (req, res) => {
  console.log(req.body);
});
// Data to Attendance Table
app.post("/manager", async (req, res) => {
  console.log(req.body);
});
// Bring data from signup page and enter in database
app.post("/signup", async (req, res) => {
  var sid = "";
  var name = req.body["name"];
  const arr = name.split(" ");

  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT TOP 1 ID FROM Student ORDER BY ID DESC `;
    })
    .then((result) => {
      let len = (parseInt(result.recordset[0].ID.slice(1, 8)) + 1).toString()
        .length;
      sid = result.recordset[0].ID.replace(
        result.recordset[0].ID.slice(8 - len, 8),
        parseInt(result.recordset[0].ID.slice(1, 8)) + 1
      ).toString();
      res.sendFile(__dirname + "/html/index.html");
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });

  database.connect().then((pool) => {
    pool.query`exec signupDetails ${sid},${req.body["cnic"]},${arr[0]},${arr[1]}, ${req.body["Father_Name"]},${req.body["dob"]},${req.body["domicile"]},'12345',${req.body["Po_Address"]},${req.body["Phone"]},${req.body["meritno"]},${req.body["fno"]},${req.body["discipline"]},${req.body["semester"]} `;
  });
});

// Attendance data for student dashboard
app.get("/attendance", async (req, res) => {
  let id = "s0000001";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`select status,count(status) AS NOD from Attendance WHERE ID=${id} group by STATUS`;
    })
    .then((result) => {
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

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

//Fetch Monthly bill of student
app.get("/showHostelBill", async (req, res) => {
  let id = "s0000001";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT * FROM MonthlyBills where ID=${id}`;
    })
    .then((result) => {
      console.log(result.recordset);
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Student details fetched from database
app.get("/showStdDetails", async (req, res) => {
  let id = "s0000001";
  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`SELECT FIRST_NAME,LAST_NAME,s.ID,CNIC,DISCIPLINE,PCNO FROM Hostelites AS h INNER JOIN STUDENT AS s ON h.ID = s.ID  where s.ID=${id}`;
    })
    .then((result) => {
      // console.log(result.recordset);
      res.send(result.recordset);
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/attendanceenter", async (req, res) => {
  var date = req.body.date;
  const arr = date.split(" ");
  var str = arr[2] + "-" + arr[1] + "-" + arr[3];

  const result = await database
    .connect()
    .then((pool) => {
      return pool.query`insert into Attendance values (${str},${req.body.status},'s0000001') `;
    })
    .then((result) => {
      res.sendFile(__dirname + "/html/studentDashboard.html");
      database.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3001, function () {
  console.log("running");
});
