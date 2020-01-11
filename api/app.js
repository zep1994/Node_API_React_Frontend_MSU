const path = require('path')
const express = require('express')

const app = express()

let indexPage = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', indexPage)

app.listen(3001)

