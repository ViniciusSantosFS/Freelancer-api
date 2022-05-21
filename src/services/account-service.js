const { Account } = require('../models')
const { transporter, mailOptions } = require('../config/nodemailer')
const bcrypt = require('bcrypt')

class AccountService {
  async create({ name, email, password }) {
    const account = await Account.count({ where: { email } })
    if (account) return false

    const saltOrRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltOrRounds)
    await Account.create({ name, email, password: hashedPassword })

    const info = {
      from: mailOptions,
      to: email,
      subject: 'Valide sua conta',
      html: `<div>
                  <h2>${name} copie o cole o token abaixo no campo de texto do menu para validar sua senha</h2>
                  </br/>
                  <p>token</p>
                 </div>`,
    }

    return transporter.sendMail(info)
  }
}

const accountService = new AccountService()

module.exports = { accountService }
