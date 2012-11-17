var express = require('express');
var app = express();


app.use(express.static('../www'));


app.listen(4000);
console.log("server running on port 4000");