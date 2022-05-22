const express = require('express')
const { accountController } = require('./controllers/account-controller')

const app = express()

app.use(express.json())
app.get('/accounts', accountController.index)
app.post('/accounts', accountController.store)
app.put('/accounts/validate-email', accountController.validateEmail)

module.exports = app
