var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserDetailsSchema = new Schema({
  name:{type:String, required: true, unique: true},
  address:String,
  phone_no:{type: Number, unique: true}
});


// var User_Details = mongoose.model('User_Details',UserDetailsSchema);

module.exports = UserDetailsSchema;
