const nodemailer = require("nodemailer");

async function sendEmail(email) {
   // Looking to send emails in production? Check out our Email API/SMTP product!
let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });

        const info = await transport.sendMail({
          from: process.env.MAIL_FROM_ADDRESS, // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
}

module.exports = sendEmail