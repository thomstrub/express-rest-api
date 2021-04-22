const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('<h1>Welcome Home</h1>');
})

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
})