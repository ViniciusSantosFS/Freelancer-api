const { Account } = require('../models')
const { transporter, mailOptions } = require('../config/nodemailer')
const { SECRET, validateEmailOptions } = require('../config/jwt')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class AccountService {
  async create({ name, email, password }) {
    const account = await Account.count({ where: { email } })
    if (account) return false

    const saltOrRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltOrRounds)
    const { id } = await Account.create({
      name,
      email,
      password: hashedPassword,
    })

    const token = jwt.sign({ id }, SECRET, validateEmailOptions)

    const info = {
      from: mailOptions,
      to: email,
      subject: 'Valide sua conta',
      html: `<div>
                  <h2>${name} copie o cole o token abaixo no campo de texto do menu para validar sua senha</h2>
                  </br/>
                  <p>${token}</p>
                 </div>`,
    }

    return transporter.sendMail(info)
  }

  async validateEmail(token) {
    let payload
    try {
      payload = jwt.verify(token, SECRET)
    } catch {
      return false
    }

    const user = await Account.findOne({ where: { id: payload.id } })
    user.hasEmailValidated = true
    await user.save()
    return true
  }
}

const accountService = new AccountService()

module.exports = { accountService }
