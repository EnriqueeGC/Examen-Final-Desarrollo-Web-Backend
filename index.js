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

app.use(cors());

app.use(bodyParser.json());
app.use('/api/', router);
app.get("/",(req,res) => {
  
  res.json({mesage:"Bienvenido Estudiantes de UMG"});
})

//configurar el puerto para render en la nube
const PORT = process.env.PORT || 8081;

// Create a Server
const server = app.listen(PORT, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})