const { Producto, Categoria } = require('../models');

const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, stock, categoriaId } = req.body;
        if (!nombre || precio == null || stock == null) {
            return res.status(400).json({ message: 'nombre, precio y stock son requeridos' });
        }
        if (categoriaId) {
            const cat = await Categoria.findByPk(categoriaId);
            if (!cat) return res.status(400).json({ message: 'Categoría proporcionada no existe' });
        }
        const producto = await Producto.create({ nombre, precio, stock, categoriaId: categoriaId ?? null });
        return res.status(201).json(producto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll({ include: [{ model: Categoria, as: 'categoria' }] });
        return res.json(productos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id, { include: [{ model: Categoria, as: 'categoria' }] });
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.json(producto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, stock, categoriaId } = req.body;
        const producto = await Producto.findByPk(id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        if (categoriaId) {
            const cat = await Categoria.findByPk(categoriaId);
            if (!cat) return res.status(400).json({ message: 'Categoría proporcionada no existe' });
            producto.categoriaId = categoriaId;
        }
        producto.nombre = nombre ?? producto.nombre;
        producto.precio = precio ?? producto.precio;
        producto.stock = stock ?? producto.stock;
        await producto.save();
        return res.json(producto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Producto.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.json({ message: 'Producto eliminado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
};
