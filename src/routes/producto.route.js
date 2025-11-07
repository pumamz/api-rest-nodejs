const express = require('express');
const router = express.Router();
const {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productoControllers');

router.post('/productos', crearProducto);
router.get('/productos', obtenerProductos);
router.get('/productos/:id', obtenerProductoPorId);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);

module.exports = router;