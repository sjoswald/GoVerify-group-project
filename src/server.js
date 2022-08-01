const express = require('express')
const app = express()
const path = require('path')

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/index.html'))
})

app.get('/consent', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/consent.html'))
})

app.get('/personal-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/personal_details.html'))
    })

app.listen (process.env.PORT || 3000)