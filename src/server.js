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

app.get('/document-type', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/document_type.html'))
})

app.get('/upload-rules', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/upload_rules.html'))
})

app.get('/upload', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/document_upload.html'))
})

app.get('/review-upload', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/review_upload.html'))
})

app.get('/your-documents', (req, res) => {
res.sendFile(path.join(__dirname, 'pages/your_documents.html'))
})

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/fictional_city_council_homepage.html'))
    })

app.listen (process.env.PORT || 3000)