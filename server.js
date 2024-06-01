const app = require('./app');
const { mongoConn } = require('./databases/configuration');
const dotenv = require('dotenv').config();

// Conectar a la base de datos y arrancar el servidor
mongoConn().then(() => {
    console.log('Conectado a la base de datos');

    app.set('port', process.env.PORT || 4001);

    app.listen(app.get('port'), () => {
        console.log(`Servidor arrancado en el puerto: ${app.get('port')}`);
    });
}).catch(err => {
    console.error('Error al conectar a la base de datos', err);
});
