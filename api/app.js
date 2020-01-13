const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const router = express.Router()

//Define routes
let id_all = require('./routes/all')
let id_one = require('./routes/sort_by_name')
let sort_By = require('./routes/sortby')
let sort_Type = require('./routes/sort_by_guide_type')
let search = require('./routes/sort_one')
let last_update = require('./routes/last_update')

//Temp for views

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', 'views');


// MiddleWare
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use(cors())

app.post('/guides', function(req, res) {
  let name = req.body.name 
  console.log('name')
})

app.get('/guides/?id=:id', search)
app.get('/guides/guide_types/:guide', sort_Type)
app.get('/guides/sortby/:sort_by', sort_By)
app.get('/guides/:id', id_one)
app.get('/guides', id_all)
app.use('/about', (req, res) => {
  res.render('about.ejs')
})
app.get('/', last_update)


//Port
app.listen(3001)

