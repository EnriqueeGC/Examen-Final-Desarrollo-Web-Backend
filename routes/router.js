
let express = require('express');
let router = express.Router();

const proyecto = require('../controllers/proyecto.controllers.js');

router.post('/to-do/create', proyecto.create);
router.get('/to-do/all', proyecto.findAll);
router.get('/to-do/onebyid/:id', proyecto.findById);
router.put('/to-do/update/:id', proyecto.update);
router.delete('/to-do/delete/:id', proyecto.delete);

module.exports = router;