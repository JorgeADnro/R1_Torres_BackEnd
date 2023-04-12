const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, apPaterno, apMaterno,edad,genero,correo,telefono,ciudad,cargo } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre = nombre;
        producto.apPaterno = apPaterno;
        producto.apMaterno = apMaterno;
        producto.edad = edad;
        producto.genero = genero;
        producto.correo = correo;
        producto.telefono = telefono;
        producto.ciudad = ciudad;
        producto.cargo = cargo;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id },producto, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}