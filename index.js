require ('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)
