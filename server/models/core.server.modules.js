'use strict';

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        //sendgrid password
        api_user: 'sendgrid_user',
        api_key: 'sendgrid_password'
    }
};
var mailer = nodemailer.createTransport(sgTransport(options));


exports.renderIndex = function(req,res) {
    res.render('server/views/index', {
        user: req.user || null
    })
};                                              //removed modules and core didn't exist in dir
//render server error page
exports.renderServerError = function(req, res) {
    res.status(500).render('server/views/500', {
        error: 'Opps! Something went wrong...?'
    });
};
//render server not found page
exports.renderNotFound = function(req, res) {
    res.status(404).render('server/views/404', {
        url: req.originalUrl
    });
};
//send an email when the contact form is submitted
// direct transport from nodemailer website best for using locally??
exports.sendMail = function(req, res) {
    console.log("sending email!!");
    var data = req.body;


    //maybe not data.email??????????
var email = {
    to: ['karl@reclaimedartcraftsman.com'],
    from: data.email,
    subject: 'Message from ' + data.name,
    text: data.message
};

    mailer.sendMail(email, function(err, res) {
        if (err) {
            console.log(err)
        }
        console.log(res);
    });

};