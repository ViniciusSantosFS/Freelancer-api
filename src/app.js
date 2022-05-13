require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send({message: 'Hello World'})
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})