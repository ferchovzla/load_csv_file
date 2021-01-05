require('dotenv').config()
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const userRoute = require('./routes/datos')

const app = express();
// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.raw());
app.use(express.json());
app.use(cors());
//app.use(morgan('combined', { stream: winston.stream }));
//set apis routes
app.use('/api/user', userRoute)
//set assets route
app.use('/assets', express.static('assets'));

//import netScrape Datamodels 
const db = require('./models');
//Database Synchronize (create, update, ...-> database, tables,index, ...)
db.sequelize.options.logging = false
db.sequelize.sync();

// Connection API PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Running Load csv App - Connected to port ' + port)
  //Connect to Main DataBase
  db.sequelize.authenticate().then(() =>{
    console.log("Conected successfully to BD "/*+db.config.database*/);
  }).catch(error =>{
    console.log("¡¡¡¡ Error generated..... !!!!", error)
  })
})

// 404 Error
/*app.use((req, res, next) => {
  next(createError(404));
});*/

app.use(function (err, req, res, next) {
  console.error("¡¡¡¡ Error generated..... !!!!");
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
