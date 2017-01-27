var express = require('express');
var path = require('path');
var app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/:time', function (req, res) {
  var date = new Date(req.params.time);
  var naturalDate = (date.toDateString()== 'Invalid Date')? null : date.toDateString().slice(4);
  res.end(JSON.stringify({'unix': Date.parse(date), 'natural': naturalDate}))
});



app.listen( process.env.PORT||3000)
