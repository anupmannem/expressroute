const express = require('express');
const Router = express.Router();

// Define all routes specific for User

Router.get('/user', function(req, res, next){
    res.send("<h1>I am User Home page!!</h1>");
});
Router.get('/user/login', function(req, res, next){
    res.send("<h1>I am User Login page!!</h1>");
});
Router.get('/user/register', function(req, res, next){
    res.send("<h1>I am User Register page!!</h1>");
});

module.exports = Router;