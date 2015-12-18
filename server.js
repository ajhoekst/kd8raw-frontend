var express = require('express');
var path = require('path');

// Constants
var PORT = process.env.PORT || 3002;

// App
var app = express();
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
