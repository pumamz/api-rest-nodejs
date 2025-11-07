const express = require('express');
const router = express.Router();
const {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria
} = require('../controllers/categoriaControllers');

router.post('/categorias', crearCategoria);
router.get('/categorias', obtenerCategorias);
router.get('/categorias/:id', obtenerCategoriaPorId);
router.put('/categorias/:id', actualizarCategoria);
router.delete('/categorias/:id', eliminarCategoria);

module.exports = router;