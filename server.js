const express = require('express');

const app = express();

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
            'Hello JSON'
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