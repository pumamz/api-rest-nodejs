const sequelize = require('../config/database');
const Categoria = require('./categoria.model');
const Producto = require('./producto.models');

Categoria.hasMany(Producto, { foreignKey: 'categoriaId', as: 'productos' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

module.exports = {
    sequelize,
    Categoria,
    Producto
};