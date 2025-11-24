import express from "express"     // Funcion ejecutable
import { Express } from "express" //type interface

//const server = express();
const server: Express = express()



//Routing
/** Server.get, sirve para verificar
 * si nuestro puerto, ademas de escuchar
 * por las conexiones, verifica que el 
 * servidor este respondiendo a las solicitudes
 * El routing, define que debe responder el servidor
 * segun la ruta
 */
server.get("/", (req, res) => {             //Cada req - res, tiene sus propios metodos

    const datos = [
        {id: 1, name: "Adrian"},
        {id: 2, name: "Alfonso"}
    ]
    res.send(datos)
})

export default server