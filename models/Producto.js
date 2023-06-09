const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apPaterno: {
        type: String,
        required: true
    },
    apMaterno: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        enum: ['H', 'M'],
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date().toISOString().slice(0, 10)
      },
    areaInt: {
        type: [],
        required: true
    }
});


module.exports = mongoose.model('Producto', ProductoSchema);