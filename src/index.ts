import colors from "colors"
import server from "./server";


/** Server.listen, sirve para 
 * iniciar el servidor, ademas de
 * hacerlo escuchar conexiones entrantes
 * en un puerto especifico
 */
const port = process.env.PORT || 4000;
server.listen(4000, () => {
    console.log(colors.cyan.bold(`RES API en el puerto ${port}`))
})