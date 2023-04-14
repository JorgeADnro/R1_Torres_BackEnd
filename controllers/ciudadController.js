const Ciudad = require("../models/Ciudad");

exports.obtenerCiudades = async (req, res) => {

    try {

        const ciudad = await Ciudad.find();
        res.json(ciudad)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerCiudad = async (req, res) => {

    try {
        let ciudad = await Ciudad.findById(req.params.id);

        if(!ciudad) {
            res.status(404).json({ msg: 'No existe la ciudad' })
        }
       
        res.json(ciudad);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}