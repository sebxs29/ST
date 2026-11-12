// *** 1. CREAR EL MODELO ***

import mongoose, { model } from 'mongoose'
import bcrypt from "bcryptjs";

import { randomBytes } from 'node:crypto'

const { Schema } = mongoose

const veterinarioSchema = new Schema({
    
    nombre: {type: String, required: true, trim: true},
    apellido: {type: String, required: true, trim: true},
    direccion: {type: String, trim: true, default: null},
    celular: {type: String, trim: true, default: null},
    email: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true},
    status: {type: Boolean, default: true},
    token: {type: String, default: null},
    confirmEmail: {type: Boolean, default: false},
    rol: {type: String, default: 'veterinario'}
},
{
    timestamps: true
}
)

// MÉTODO PARA CIFRAR EL PASSWORD
veterinarioSchema.methods.encryptPassword = async function (passwordUser) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(passwordUser, salt)
    return hashedPassword
}

// MÉTODO PARA VERIFICAR SI EL PASSWORD ES EL MISMO DE LA BD
veterinarioSchema.methods.matchPassword = async function (passwordUser) {
    const response = await bcrypt.compare(passwordUser, this.password);
    return response
}

// MÉTODO PARA CREAR UN TOKEN (OTP) para el correo no JWT
veterinarioSchema.methods.createToken = function () {
    const tokenGenerado = randomBytes(2).toString('hex').toUpperCase()
    this.token = tokenGenerado
    return tokenGenerado
}

export default model('Veterinario', veterinarioSchema)