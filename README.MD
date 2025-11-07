# API REST Node.js

Este proyecto es una API REST desarrollada con Node.js que proporciona un sistema de gestión de productos y categorías con autenticación de usuarios.

## Características

- CRUD completo para productos y categorías
- Relaciones entre productos y categorías
- Base de datos MySQL con Sequelize ORM
- Manejo de variables de entorno

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **MySQL** - Base de datos
- **Sequelize** - ORM
- **dotenv** - Manejo de variables de entorno

## Prerrequisitos

- Node.js (v14 o superior)
- MySQL
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/pumamz/api-rest-nodejs.git
cd api-rest-nodejs
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
PORT=3000
DB_NAME=nombre_base_datos
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
```

4. Iniciar el servidor:
```bash
npm run dev
```

## Estructura del Proyecto

```
api-rest-nodejs/
├── src/
│   ├── app.js              # Punto de entrada de la aplicación
│   ├── config/
│   │   └── database.js     # Configuración de la base de datos
│   ├── controllers/
│   │   ├── categoriaControllers.js
│   │   └── productoControllers.js
│   ├── models/
│   │   ├── categoria.model.js
│   │   ├── producto.models.js
│   │   └── index.js
│   └── routes/
│       ├── categoria.route.js
│       └── producto.route.js
├── package.json
└── README.md
```

## Modelos de Datos

### Producto
- id (Integer, Primary Key)
- nombre (String)
- precio (Float)
- stock (Integer)
- categoriaId (Integer, Foreign Key)

### Categoria
- id (Integer, Primary Key)
- nombre (String)

## Endpoints

### Productos
- `GET /productos` - Obtener todos los productos
- `GET /productos/:id` - Obtener un producto por ID
- `POST /productos` - Crear un nuevo producto
- `PUT /productos/:id` - Actualizar un producto
- `DELETE /productos/:id` - Eliminar un producto

### Categorías
- `GET /categorias` - Obtener todas las categorías
- `GET /categorias/:id` - Obtener una categoría por ID
- `POST /categorias` - Crear una nueva categoría
- `PUT /categorias/:id` - Actualizar una categoría
- `DELETE /categorias/:id` - Eliminar una categoría

## Scripts Disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon