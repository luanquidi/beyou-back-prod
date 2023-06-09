'use strict'

// Se declaran modulos.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactoSchema = Schema({
    cliente: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    mensaje: { type: String, required: true },
    asunto: { type: String, required: true },
    estado: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});

// Se exporta modulo.
module.exports = mongoose.model('contacto', ContactoSchema);