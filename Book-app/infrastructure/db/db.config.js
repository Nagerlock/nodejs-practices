const mongoose = require('mongoose')

/**
 * Modelos
 */
require('../../domain/models/book.models')

/**
 * Conectar a la bd
 */
exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/libro")
        .then(() => console.info("Conexion se realizo con exito!"))
        .catch((error) => console.error("Tenemos un 33212!", error));
}