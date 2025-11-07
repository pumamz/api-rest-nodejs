const express = require('express');
const app = express();
const sequelize = require('./config/database');
const productoRoutes = require('./routes/producto.route');
const categoriaRoutes = require('./routes/categoria.route');
     
require('dotenv').config();

app.use(express.json());

app.use(productoRoutes);
app.use(categoriaRoutes);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida a la base de datos');

        await sequelize.sync({ alter: true });
        console.log('Tablas sincronizadas con la base de datos');

        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();
