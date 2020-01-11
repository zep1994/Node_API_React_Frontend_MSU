const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const router = express.Router()

//Define routes
let indexPage = require('./routes/index')
let msu_api = require('./routes/api/msu_api')

//Temp for views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MiddleWare
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

// Routes
//app.use('/', indexPage)

app.use('/', msu_api)

//Port
app.listen(3001)

