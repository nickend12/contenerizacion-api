const Universidad = require('../models/universidad');
const { request, response } = require('express');

const createUniversidad = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : '';
        const ubicacion = req.body.ubicacion;

        const universidadDB = await Universidad.findOne({ nombre });
        if (universidadDB) {
            return res.status(400).json({ msg: 'Ya existe' });
        }

        const data = { nombre, ubicacion };
        const universidad = new Universidad(data);
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const getUniversidades = async (req = request, res = response) => {
    try {
        const universidadesDB = await Universidad.find();
        return res.json(universidadesDB);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const updateUniversidadByID = async (req = request, res = response) => {
    try {
        const data = req.body;
        const id = req.params.id;
        data.fechaActualizacion = new Date();
        const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true });
        return res.json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
};

module.exports = { createUniversidad, getUniversidades, updateUniversidadByID };
