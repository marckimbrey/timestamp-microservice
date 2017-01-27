var express = require('express')
var app = express();

app.get('/:time', function (req, res) {
  var date = new Date(req.params.time);
  var naturalDate = (date.toDateString()== 'Invalid Date')? null : date.toDateString().slice(4);
  res.end(JSON.stringify({'unix': Date.parse(date), 'natural': naturalDate}))
});

app.listen(3000)
