const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

const gmailEmail = functions.config().gmailEmail
const gmailPassword = functions.config().gmailPassword
console.log('gmailEmail',gmailEmail)
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
})

const APP_NAME = 'Dakshya Portfolio Uno'

exports.sendContactFormEmail = function(email, message) {
    //email is who to send to
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `New contact form submission from your personal website`,
        text: message
    }
    return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('New contact form email send to:', email)
    })
}