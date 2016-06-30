var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var app = require('../app/app.js');


//config
app.set('views', path.join(__dirname,'..','views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(session({
    secret: 'test',
    cookie:{maxAge:300000},
    resave: true,
    saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.static('./public'));
