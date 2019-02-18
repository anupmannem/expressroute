const express = require('express');
const Router = express.Router();

// Define all routes specific for Admin

Router.get('/', function(req, res, next){
    res.send("<h1>I am Admin Home page!!</h1>");
});
Router.get('/login', function(req, res, next){
    res.send("<h1>I am Admin Login page!!</h1>");
});
Router.get('/register', function(req, res, next){
    res.send("<h1>I am Admin Register page!!</h1>");
});

module.exports = Router;