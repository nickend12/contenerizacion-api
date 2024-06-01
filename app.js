
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

// Rutas
const cliente = require('./routes/cliente');
const tipoProyecto = require('./routes/tipoproyecto');
const universidad = require('./routes/universidad');
const etapa = require('./routes/etapa');


app.use('/api/cliente', cliente);
app.use('/api/tipoproyecto', tipoProyecto);
app.use('/api/universidad', universidad);
app.use('/api/etapa', etapa);


module.exports = app;
