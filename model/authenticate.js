var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthenticateSchema = new Schema({
  username:{type:String, required: true, unique: true},
  password:String
});

module.exports = AuthenticateSchema;
