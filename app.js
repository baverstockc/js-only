var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

var server = app.listen(3000,function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});