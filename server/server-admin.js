var express = require('express');
var app = express();

app.use(express.static('../admin/www'));
app.get('/upload', function(req, res){
    console.log(req);
});

app.listen(4001);
console.log("server running on port 4001");
