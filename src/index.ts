import server from "./server";


/** Server.listen, sirve para 
 * iniciar el servidor, ademas de
 * hacerlo escuchar conexiones entrantes
 * en un puerto especifico
 */

server.listen(4000, () => {
    console.log(`RES API en el puerto 4000`)
})