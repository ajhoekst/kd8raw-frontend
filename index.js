var express = require('express');

// Constants
var PORT = process.env.PORT || 3002;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello from KD8RAW.com\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
