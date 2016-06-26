var mongoose = require('mongoose');
var UserDetailsSchema = require('../model/user_details.js');
var HttpStatus = require('http-status-codes');
var app = require('../app/app.js');

//api for get all persons
app.get('/api/persons',function(req,res){
  if(req.session.username){
    var db = mongoose.createConnection('localhost','mydb');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Db is open");
      var User = db.model('User_Details',UserDetailsSchema);
      User.find({},function(err,data){
        if(err){
          console.error(err);
          res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }else{
          console.log(data);
          res.status(HttpStatus.OK).send({entity:data});
        }
      });
    });
  } else {
    res.sendStatus(HttpStatus.UNAUTHORIZED)
  }

})

//api for adding a person
app.post('/api/create',function(req,res){
   if(req.session.username){
    var db = mongoose.createConnection('localhost','mydb');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Db is open");
      var obj = {
        name: req.body.name,
        address: req.body.address,
        phone_no: req.body.phone_no,
      }
      if(obj){
          var User = db.model('User_Details',UserDetailsSchema);
          new User(obj).save(function (err,result) {
            if (err) {
              console.error(err);
              res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
              mongoose.disconnect();
            } else if(result) {
              res.sendStatus(HttpStatus.CREATED);
              mongoose.disconnect();
            }
          });
        }
    });
   } else {
    res.sendStatus(HttpStatus.UNAUTHORIZED)
  }
})
