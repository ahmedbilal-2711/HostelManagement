// BackEnd
let express = require("express");
let app = express();
app.use(express.urlencoded({extented:true}));
let data = require("../dataBase");
console.log(data);
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


app.get('/users', (req, res) => {
  res.json(res.json());
})