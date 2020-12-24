var express = require('express');
var app = express();


app.get('/profile', (req, res) => { 
    res.send("Working profile")
});
