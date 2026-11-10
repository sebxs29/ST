import mongoose from 'mongoose'

async function connection() {

    try {
        // DESESTRUCTURACION
        const {connection} = await mongoose.connect(process.env.MONGODB_URI_LOCAL);
        console.log(`Connection to DB :) on ${connection.host} - ${connection.port}`)

    } catch (error) {
        console.log(error)
    }

}

export default connection