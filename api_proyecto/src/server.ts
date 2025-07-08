import Express from "express"
import { db } from "./config/db"
import router from "./router"
import cors from 'cors'

const server = Express()

server.use(cors());

server.get('/',(request,response)=>{
    response.send('Hola Mundo Cuyeyo')
})

async function conectarDB() {
    try {
        await db.authenticate();
        db.sync()
        console.log('Conexión a la base de datos establecida correctamente.')
        
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

conectarDB();


server.use(Express.json())
server.use('/api', router)
export default server