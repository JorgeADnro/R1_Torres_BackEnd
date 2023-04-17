const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    cupo:{
        type: Number,
        required: true
    },

});

EventoSchema.methods.actualizarCupo = async function () {
    const productosAsignados = await Producto.countDocuments({evento: this._id});
    this.cupo = this.cupoMaximo - productosAsignados;
    await this.save();
  }
module.exports = mongoose.model('Evento', EventoSchema);