const mongoose = require('mongoose');

const CiudadSchema = mongoose.Schema({
    ciudad: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('Ciudad', CiudadSchema);