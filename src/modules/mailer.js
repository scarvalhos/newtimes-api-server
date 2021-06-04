const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { mailer } = require('../config/mailer.js');

const { host, port, user, pass } = mailer;

const transport = nodemailer.createTransport({
    host,
    secure: false,
    port,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: false
    }
});

transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));

module.exports = transport;
