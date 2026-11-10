import { app, port } from './server.js'

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})