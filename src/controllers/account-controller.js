const { accountService } = require('../services/account-service')
const yup = require('yup')

class AccountController {
  index(req, res) {
    res.send({ message: 'Hello' })
  }

  async store(req, res) {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        name: yup.string().required(),
      })
      await schema.validate(req.body, { abortEarly: true })
    } catch (error) {
      return res.status(400).send({ message: error.message })
    }

    const { name, email, password } = req.body

    const success = await accountService.create({ name, email, password })

    if (!success) {
      return res.status(400).send({ message: 'Conta já cadastrada' })
    }

    return res.status(201).end()
  }
}

const accountController = new AccountController()

module.exports = { accountController }
