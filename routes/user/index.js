const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Router = express.Router();

// this is loaded into main index.js so no need to define body-parser locally
// if not defined in main index.js then define here
// required for parsing requests json
// Router.use(bodyParser.json());
// Router.use(bodyParser.urlencoded({extended: true}));

// Define all routes specific for User

Router.get('/', function(req, res, next){
    res.send("<h1>I am User Home page!!</h1>");
});
Router.get('/login', function(req, res, next){
    res.send("<h1>I am User Login page!!</h1>");
});
Router.get('/contact', function(req, res, next){
    res.render('index', {"title": "Index"});
});
Router.post('/contact', function(req, res, next){
    // console.log(req.body);
    // res.end();    
    /*  output of req.body - submit
        { name: 'anup',
        surname: 'm',
        email: 'anup.mannem@gmail.com',
        need: 'Request quotation',
        message: 'adfadsf' }
    */

    // this callback used for setting up email smtp    
    let transporter = nodemailer.createTransport({
        host: "domain smtp server",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "<domain email>", // generated ethereal user
          pass: "<email password>" // generated ethereal password
        }
      });

    let mailOptions = {
    from: '"anup" <support@audiopoc.com>', // sender address
    to: `anup.mannem@gmail.com, ${req.body.email}`, // list of receivers
    subject: "Feedback form data", // Subject line
    text: "Hello world?", // plain text body
    html: `The following data sent by <br> Name: ${req.body.name} <br> Email: ${req.body.email}` // html body
    };

    transporter.sendMail (mailOptions, (err, info) => {
        if (err) return console.log(err);
        console.log('Message sent : %s', info.messageId);
    });
    res.json({'status': 'email sent'});
});
Router.get('/register', function(req, res, next){
    res.send("<h1>I am User Register page!!</h1>");
});

module.exports = Router;