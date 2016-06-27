var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var AuthenticateSchema = require('../model/authenticate.js');
var HttpStatus = require('http-status-codes');
var app = require('../app/app.js');
const saltRounds = 10;


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
        if(data.length){
          bcrypt.compare(req.body.password, data[0].password, function(err, result) {
              if(result){
                req.session.username = req.body.username;
                res.status(HttpStatus.OK);
                res.send({username:req.body.username});
                mongoose.disconnect();
              } else {
                 res.sendStatus(HttpStatus.UNAUTHORIZED);
              }
              if(err){
                console.error(err);
              }
          });
        } else {
          res.sendStatus(HttpStatus.UNAUTHORIZED);
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
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(obj.password, salt, function(err, hash) {
              if(err){
                console.error(err);
              } else {
                  var Signup = db.model('Creditials',AuthenticateSchema);
                  obj.password = hash;
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
      }
  });
});

//api for Logout
app.get('/api/logout',function(req,res){
 delete req.session;
 if (!req.session) {
   res.status(HttpStatus.OK).send();
 }
});
