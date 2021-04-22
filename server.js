const express = require('express');

const app = express();

console.log(process.env.MESSAGE_STYLE)
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.MESSAGE_STYLE, "<----")

// logger
app.use('/', (req, res, next) => {
    console.log(req.method + ' ' + req.path.toUpperCase() + ' ' + req.ip)
    next(); 
})

// time server

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({"time": req.time});
})

// app.use(express.static(__dirname + "/public"))
app.use("/public", express.static(__dirname + "/public"));

app.get('/home', (req, res) => {
    res.send('<h1>Welcome Home</h1>');
})

app.get('/json', (req, res) => {
    let message = process.env.MESSAGE_STYLE == 'uppercase'
        ? 
            'HELLO JSON'
        :
            process.env
    res.json({
        "message": message
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
})