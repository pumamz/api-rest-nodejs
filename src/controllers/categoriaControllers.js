const { Categoria, Producto } = require('../models');

const crearCategoria = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) return res.status(400).json({ message: 'El nombre es requerido' });
        const categoria = await Categoria.create({ nombre });
        return res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll({ include: [{ model: Producto, as: 'productos' }] });
        return res.json(categorias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const obtenerCategoriaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id, { include: [{ model: Producto, as: 'productos' }] });
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        return res.json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const actualizarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        categoria.nombre = nombre ?? categoria.nombre;
        await categoria.save();
        return res.json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Categoria.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: 'Categoría no encontrada' });
        return res.json({ message: 'Categoría eliminada' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria
};