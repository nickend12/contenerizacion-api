const { Router } = require('express');
const { createUniversidad, getUniversidades, updateUniversidadByID } = require('../controllers/universidad');

const router = Router();

// Crear universidad
router.post('/', createUniversidad);

// Obtener todas las universidades
router.get('/', getUniversidades);

// Actualizar universidad por ID
router.put('/:id', updateUniversidadByID);

module.exports = router;
