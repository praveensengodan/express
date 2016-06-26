var express = require('express');
var app = require('./app/app.js');
require("./config/config.js");
require("./routes/index.js");
require("./controller/authenticate.js");
require("./controller/person.js");


var server =app.listen('3000',()=>{
  console.log("localhost runs at "+server.address().port);
});
