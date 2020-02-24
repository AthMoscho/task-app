const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thanosmosh@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to our new app ${name}!`
    })
}

const sendDeletionEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thanosmosh@gmail.com',
        subject: 'We Going to Miss You!',
        text: `Goodbye ${name}! Hope to see you back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,sendDeletionEmail
}