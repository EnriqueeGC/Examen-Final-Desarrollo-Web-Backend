require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
 
const db = require('./config/db.config.js');

// Rutas
let router = require('./routes/router.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

const app = express();

const cors = require('cors')
const corsOptions = {
  origin: 'https://examen-final-desarrollo-web-backend.onrender.com', 
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api/', router);
app.get("/",(req,res) => {
  
  res.json({mesage:"Bienvenido Estudiantes de UMG"});
})

// Create a Server
const server = app.listen(8081, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})