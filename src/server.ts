import colors from "colors"
import express from "express"     // Funcion ejecutable
import { Express } from "express" //type interface
import router from "./Routes/routes"
import db from "./config/db"


//Conect to DB

async function connectDB() {
    try {
        await db.authenticate()          // authentication to DB

        await db.sync()                       //  Wait for new columns
        console.log(colors.blue.bold("Database connected and synced successfully"));
                   
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold("There was an error connecting to the database"));
    }
}
connectDB()



//const server = express();
const server: Express = express()

//Server.use, registra las rutas o middleware en la app
server.use("/api/products", router)

 
export default server