const Evento = require("../models/Evento");

exports.crearEvento = async (req, res) => {

    try {
        let evento;

        // Creamos nuestro producto
        evento = new Evento(req.body);
        await evento.save();
        res.send(evento);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEventos = async (req, res) => {

    try {

        const evento = await Evento.find();
        res.json(evento)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerEvento = async (req, res) => {

    try {
        let evento = await Evento.findById(req.params.id);

        if(!evento) {
            res.status(404).json({ msg: 'No existe el evento' })
        }
       
        res.json(evento);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEvento = async (req, res) => {

    try {
        let evento = await Evento.findById(req.params.id);

        if(!evento) {
            res.status(404).json({ msg: 'No existe el evento' })
        }
       
        await Evento.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Evento eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}