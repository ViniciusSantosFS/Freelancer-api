require('dotenv').config()
const app = require('./app')
const { PORT } = require('./config/env')

app.listen(PORT)
