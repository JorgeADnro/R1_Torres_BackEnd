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
        default: Date.now()
    }
});

/*
a. Nombre(s)
b. Apellido Paterno
c. Apellido Materno
d. Edad
e. Genero
f. Área de interés (deberá mostrarse un combo con esta información, para que el usuario pueda elegir la
correcta, no son datos fijos, se cargan de una colección)
g. Correo Electrónico
h. Teléfono
i. Ciudad donde reside (misma observación del inciso f)
j. Cargo dentro de su empresa (misma observación del inciso f)
k. Fecha de Registro (automática, se toma del sistema)
l. Cada evento tiene un cupo máximo de participantes. Ante el registro de cada participante al evento u evento
deseados (puede participar en uno o varios eventos), se debe restar a la disponibilidad por cada evento.
*/

module.exports = mongoose.model('Producto', ProductoSchema);