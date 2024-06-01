const { Router } = require('express');
const { createTipoProyecto, getTiposProyecto, updateTipoProyectoByID } = require('../controllers/tipoproyecto');

const router = Router();

// Crear tipo de proyecto
router.post('/', createTipoProyecto);

// Obtener todos los tipos de proyecto
router.get('/', getTiposProyecto);

// Actualizar tipo de proyecto por ID
router.put('/:id', updateTipoProyectoByID);

module.exports = router;
