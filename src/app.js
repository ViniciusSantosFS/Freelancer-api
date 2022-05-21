require('dotenv').config()
const { app } = require('./index')
const { accountController } = require('./controllers/account-controller')

app.get('/accounts', accountController.index)
app.post('/accounts', accountController.store)

app.listen(process.env.PORT)
