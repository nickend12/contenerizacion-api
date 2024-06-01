const { Router } = require('express');
const { createCliente, getClientes, updateClienteByID } = require('../controllers/cliente');

const router = Router();

// Crear cliente
router.post('/', createCliente);

// Obtener todos los clientes
router.get('/', getClientes);

// Actualizar cliente por ID
router.put('/:id', updateClienteByID);

module.exports = router;
