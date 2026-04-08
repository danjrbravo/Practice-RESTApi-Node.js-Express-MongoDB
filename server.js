const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/products')
const db = mongoose.connection

app.listen(3000, () => console.log('Server started'))