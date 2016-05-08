var app = require('../app/app.js');

app.get('/', function(req, res) {
  res.sendFile('index.html');
});
