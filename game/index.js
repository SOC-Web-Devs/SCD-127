
const express = require('express');

var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
const { query } = require('express');
const { count } = require('console');


var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scd_127'
});




connection.connect();
console.log("Connect");


app.post('/reg1', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.send("100");
    let record = {address : req.body.address};
    
    connection.query(`SELECT COUNT (*) AS name FROM wallet_dta where address = '${record.address}'`, function (err, result) {

      //var r = new RowDataPacket(result);
      //console.log(typeof result.);
      var r = result[0].name;
       //console.log(result);
       console.log(record.address);
       console.log(result[0].name);
      
      if(r == 0){
        let sql = "INSERT INTO wallet_dta SET ?";
        console.log("successfully inserted");
        connection.query(sql,record, (err) => {
            if (err) throw err;
            // console.log(err);
            res.end();
        });
      }else{
        console.log("You Are Already Registerd");
      }

      });
    //console.log(data);
})


//////////////////////////////////////////////////

app.get("/getUser", async function(req, res) {
  // console.log(req.query.user);
  res.setHeader("Access-Control-Allow-Origin", "*");
  connection.query(
      `SELECT id,balance FROM wallet_dta where address="${req.query.address}"`,
      function(err, result) {
          if (err) throw err;
          res.send(result);
          // console.log(result);
      }
  );
});
////////////////////////////////////////////////////



// Phase 1 data query

// app.get('/getdata5/',async function (req,res){
//     res.setHeader('Content-Type', 'application/json');
//   connection.query(`SELECT  id,balance FROM wallet_dta WHERE address = '${req.query.id}'`, function (err, result) {
//       if (err) throw err;
//       res.send(result);
//     });
//   });
  


//UPDATE data PHASE

app.post('/updatedata/',async function(req,res) {
  res.setHeader('Content-Type', 'application/json');
//  res.send("100");
  //var idpoint = localStorage.getItem("012");
  let record = {
    bls : req.body.bls,
    ide : req.body.ide
  };
  
  console.log(req.body.Content);
  // console.log(req.body.id);
  let sql = await `UPDATE wallet_dta SET balance = "${record.bls}" WHERE id = "${record.ide}"`
  console.log("successfully inserted");
 
  connection.query(sql, record, (err) => {
      if (err) throw err;
      // console.log(err);
      res.end();
  });


})











//LOGIN apI
app.get('/login',async function (req,res){
  
  res.setHeader('Content-Type', 'application/json');
  var a=  req.query.email_ids
   var b = req.query.pwds;
    connection.query(`SELECT * FROM login where email_id = '${a}' and pwd = '${b}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})  




//delete data PHASE


  app.get('/deletdata/:id',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`DELETE FROM phase_1 WHERE  phase_1 . id = ${req.params.id}`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  })
  






var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

