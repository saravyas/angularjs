var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('./public')); 
app.get('/',function(req,res){
	res.sendfile('./index.html');
});

app.listen(1234);