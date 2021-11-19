const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))

userRoute(app)

app.get('/', (rec, res) => res.send('Olá pelo Express'))

app.listen(port, () => console.log('Api rodando na porta 3000'))