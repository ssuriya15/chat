var express = require('express');
var app = express.Router();
const login = require("./Controller/login")
const profile = require("./Controller/profile")

var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.post('/signUp', (req, res) => login.signUp(req, res)) 
app.post('/login', (req, res) => login.login(req, res)) 
app.post('/profileDetails', (req, res) => profile.userDetailsbyId(req, res)) 
app.post('/userList', (req, res) => profile.userListByUserId(req, res)) 

app.post('/createName', (req, res) => login.createName(req, res)) 
app.get('/listUsr', (req, res) => login.listUsr(req, res)) 
app.put('/editName', (req, res) => login.editName(req, res)) 
app.delete('/deleteName', (req, res) => login.deleteName(req, res)) 

module.exports = app;