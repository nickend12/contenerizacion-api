const TipoProyecto = require('../models/tipoproyecto');
const { request, response } = require('express');

const createTipoProyecto = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : '';
        const descripcion = req.body.descripcion;

        const tipoProyectoDB = await TipoProyecto.findOne({ nombre });
        if (tipoProyectoDB) {
            return res.status(400).json({ msg: 'Ya existe' });
        }

        const data = { nombre, descripcion };
        const tipoProyecto = new TipoProyecto(data);
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const getTiposProyecto = async (req = request, res = response) => {
    try {
        const tiposProyectoDB = await TipoProyecto.find();
        return res.json(tiposProyectoDB);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

const updateTipoProyectoByID = async (req = request, res = response) => {
    try {
        const data = req.body;
        const id = req.params.id;
        data.fechaActualizacion = new Date();
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, { new: true });
        return res.json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
};

module.exports = { createTipoProyecto, getTiposProyecto, updateTipoProyectoByID };
