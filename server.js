const express = require('express')
const router = express.Router()
const app = express()

router.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen (process.env.PORT || 3000)