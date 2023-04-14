const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/eventos', require('./routes/evento'));
app.use('/api/cargos', require('./routes/cargo'));
app.use('/api/ciudad', require('./routes/ciudad'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})