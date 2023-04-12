const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    Folio: {
        type: Number,
        unique: true,
        required: true,
        default: 1
    },
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

ProductoSchema.pre('save', function (next) {
    var doc = this;
    Producto.findOne().sort('-Folio').exec(function (err, product) {
      if (product) {
        doc.Folio = product.Folio + 1;
      } else {
        doc.Folio = 1;
      }
      next();
    });
  });

module.exports = mongoose.model('Producto', ProductoSchema);
