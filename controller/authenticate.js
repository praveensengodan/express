var mongoose = require('mongoose');
var AuthenticateSchema = require('../model/authenticate.js');
var HttpStatus = require('http-status-codes');
var app = require('../app/app.js');


//api for Login
app.post('/api/authenticate',function(req,res){
  var db = mongoose.createConnection('localhost','mydb');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Db is open");
    var Auth = db.model('Creditials',AuthenticateSchema);
    Auth.find({username:req.body.username},function(err,data){
      if(err){
        console.error(err);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        mongoose.disconnect();
      }else{
        if(data[0].password == req.body.password) {
          res.status(200);
          res.cookie('username',req.body.username, { maxAge: 300000, httpOnly: true });
          res.send();
          mongoose.disconnect();
        }
      }
    });
  });
});

//api for signup
app.post('/api/signup',function(req,res){
  var db = mongoose.createConnection('localhost','mydb');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Db is open");
    var obj = {
      username: req.body.username,
      password: req.body.password,
    }
    if(obj){
        var Signup = db.model('Creditials',AuthenticateSchema);
        new Signup(obj).save(function (err,result) {
          if (err) {
            console.error(err);
            res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
             mongoose.disconnect();
          } else if(result) {
            console.log(result);
            res.sendStatus(HttpStatus.CREATED);
             mongoose.disconnect();
          }
        });
      }
  });
});

//api for Logout
app.get('/api/logout',function(req,res){
 res.clearCookie('username');
 if (!res.cookies) {
   res.status(HttpStatus.OK).send();
 }
});
