//CLI: npm install nodemailer --save
const nodemailer = require('nodemailer');
const MyConstants = require('./MyConstants');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MyConstants.email_user,
    pass: MyConstants.email_pass
  }
});
const EmailUtil = {
  send(email, id, token) {
    const text = 'Thanks for signing up, please input these informations to activate your account:\n\t .id: ' + id + '\n\t .token: ' + token;
    return new Promise(function (resolve, reject) {
      const mailOptions = {
        from: MyConstants.email_user,
        to: email,
        subject: 'Signup | Verification',
        text: text
      };
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
};
module.exports = EmailUtil;