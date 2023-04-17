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

exports.obtenerProductosPorGenero = async (req, res) => {
    const { genero } = req.params;
    try {
        const productos = await Producto.find({ genero });
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosPorArea = async (req, res) => {
    const { areaInt } = req.params;
    try {
        const productos = await Producto.find({ areaInt });
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosPorFecha = async (req, res) => {
    const { fechaCreacion } = req.params;
    try {
        const productos = await Producto.find({ fechaCreacion });
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosPorAreaYGenero = async (req, res) => {
    const { areaInt, genero } = req.params;
    try {
        const productos = await Producto.find({ areaInt, genero });
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductosPorAreaYFecha = async (req, res) => {
    const { areaInt, fechaCreacion } = req.params;
    try {
      const fecha = new Date(fechaCreacion);
      const productos = await Producto.find({ areaInt, fechaCreacion: fecha });
      res.json(productos);
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
    }
  }
  
  
  

