var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public/"));
app.use('/public/', express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + "/public/index.html");
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('listening on: ' + port);
});
