const mongoose = require('mongoose');

const CargoSchema = mongoose.Schema({
    cargo: {
        type: []
    }
});


module.exports = mongoose.model('Cargo', CargoSchema);