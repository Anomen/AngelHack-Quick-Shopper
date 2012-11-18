var express = require('express');
var app = express();


app.use(express.static('../admin'));


app.listen(4001);
console.log("server running on port 4001");
