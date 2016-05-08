var express = require('express');
var app = require('./app/app.js');
require("./config/config.js");
require("./routes/index.js");
require("./controller/person.js");


app.listen('3000',()=>{
  console.log("localhost runs at 3000");
});
