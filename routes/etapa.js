const { Router } = require('express');
const { createEtapa, getEtapas, updateEtapaByID } = require('../controllers/etapa');

const router = Router();

// Crear etapa
router.post('/', createEtapa);

// Obtener todas las etapas
router.get('/', getEtapas);

// Actualizar etapa por ID
router.put('/:id', updateEtapaByID);

module.exports = router;
