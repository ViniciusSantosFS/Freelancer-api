const nodemailer = require('nodemailer')
const {
  EMAIL,
  EMAIL_SERVICE,
  GENERATED_GOOGLE_PASSWORD,
  TRANSPORTER_NICKNAME,
} = require('./env')

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL,
    pass: GENERATED_GOOGLE_PASSWORD,
  },
})

const mailOptions = {
  from: `"${TRANSPORTER_NICKNAME}" <${EMAIL}>`,
}

module.exports = { transporter, mailOptions }
