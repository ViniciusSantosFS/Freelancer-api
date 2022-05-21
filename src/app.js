const express = require('express')
const { accountController } = require('./controllers/account-controller')

const app = express()

app.use(express.json())
app.get('/accounts', accountController.index)
app.post('/accounts', accountController.store)

module.exports = app
