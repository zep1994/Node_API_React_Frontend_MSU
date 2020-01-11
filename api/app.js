const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Define routes
let indexPage = require('./routes/index')
let msu_api = require('./routes/msu_api')

//Temp for views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MiddleWare
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

// Routes
//app.use('/', indexPage)

//Port
app.listen(3001)

