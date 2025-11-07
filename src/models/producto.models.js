const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoria.model');
const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

module.exports = Producto;