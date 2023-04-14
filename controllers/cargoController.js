const Cargo = require("../models/Cargo");

exports.obtenerCargos = async (req, res) => {

    try {

        const cargo = await Cargo.find();
        res.json(cargo)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerCargo = async (req, res) => {

    try {
        let cargo = await Cargo.findById(req.params.id);

        if(!cargo) {
            res.status(404).json({ msg: 'No existe el cargo' })
        }
       
        res.json(cargo);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}