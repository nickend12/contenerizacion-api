const Cliente = require('../models/cliente');
const { request, response } = require('express');

// Crear cliente
const createCliente = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : '';
        const email = req.body.email;

        const clienteDB = await Cliente.findOne({ nombre });
        if (clienteDB) {
            return res.status(400).json({ msg: 'Ya existe' });
        }

        const clienteByEmailDB = await Cliente.findOne({ email });
        if (clienteByEmailDB) {
            return res.status(400).json({ msg: 'Ya existe' });
        }

        const data = { nombre, email };
        const cliente = new Cliente(data);
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Obtener todos los clientes
const getClientes = async (req = request, res = response) => {
    try {
        const clientesDB = await Cliente.find();
        return res.json(clientesDB);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Actualizar cliente por ID
const updateClienteByID = async (req = request, res = response) => {
    try {
        const data = req.body;
        const id = req.params.id;
        data.fechaActualizacion = new Date();
        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true });
        return res.json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
};

module.exports = { createCliente, getClientes, updateClienteByID };
