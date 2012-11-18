var express = require('express');
var app = express();
var sys = require('sys')
var exec = require('child_process').exec;

app.use(express.static('../admin/www'));
app.use(express.bodyParser());

function puts(error, stdout, stderr) { console.log(stdout) }

app.post('/upload', function(req, res){
    console.log(__dirname + "/process.sh " + req.files.file.path);
    exec(__dirname + "/process.sh " + req.files.file.path, function(error, stdout, stderr) { 
        console.log(stdout);
        res.send(stdout);
    });
});

app.listen(4001);
console.log("server running on port 4001");
