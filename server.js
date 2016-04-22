var express=require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');

mongoose.connect('mongodb://root:root@ds013891.mlab.com:13891/myfbdb');

var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

app.listen(1000);
console.log('server is running');
