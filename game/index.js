
const express = require('express');

var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
const { query } = require('express');


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
    
    connection.query(`SELECT COUNT (*) FROM wallet_dta where address = '${record.address}'`, function (err, result) {
       
        console.log(result[0]);
        console.log(record.address);
      if(result = 0){
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






// Phase 1 data query

app.get('/getdata5',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
    
      connection.query(`select * from wallet_dta where balance`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });
  
// Phase 1 data query





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
  


//UPDATE data PHASE

app.post('/updatedata/:id',async function(req,res) {
  res.setHeader('Content-Type', 'application/json');
//  res.send("100");

  let record = {
    Content : req.body.person,
    // id : req.body.id
  };
  
  console.log(req.body.Content);
  // console.log(req.body.id);
  let sql = await `UPDATE phase_1 SET Content = "${req.body.Content}" WHERE id = ${req.params.id}`
  console.log("successfully inserted");
 
  connection.query(sql, record, (err) => {
      if (err) throw err;
      // console.log(err);
      res.end();
  });


})




var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

