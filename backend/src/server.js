// MODULOS REQUERIDOS
import express from 'express'
import dotenv from 'dotenv'

// INICIALIZACIONES
const app = express()

// CONFIGURACIONES
dotenv.config()

// MIDDLEWARES

// VARIABLES GLOBALES
app.set("port", 3000)
app.set("port", process.env.PORT || 3000)

// RUTAS

// EXPORTAR LA INSTANCIA DE APP
export default app