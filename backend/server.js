var express = require('express');
var properties = require('./config/config');
var app = express();
const mongoose = require("mongoose");
const Router = require("./router")

mongoose.connect(properties.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}); 

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})

app.use("/",Router)