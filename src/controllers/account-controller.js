const { accountService } = require('../services/account-service')
const yup = require('yup')

class AccountController {
  index(req, res) {
    res.json({ message: 'Hello' })
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
      return res.status(400).json({ message: error.message })
    }

    const { name, email, password } = req.body

    const success = await accountService.create({ name, email, password })

    if (!success) {
      return res.status(400).json({ message: 'Conta já cadastrada' })
    }

    return res.status(201).end()
  }

  async validateEmail(req, res) {
    try {
      const schema = yup.object().shape({
        token: yup.string().required(),
      })
      await schema.validate(req.body)
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }

    const { token } = req.body

    const success = await accountService.validateEmail(token)

    if (!success) {
      return res.status(400).json({ message: 'Token inválido ou expirado' })
    }

    return res.status(200).end()
  }
}

const accountController = new AccountController()

module.exports = { accountController }
