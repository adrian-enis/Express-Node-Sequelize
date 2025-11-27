import dotenv from "dotenv"
import { Sequelize } from "sequelize-typescript";
import { join } from "path";

dotenv.config()
const db = new Sequelize(process.env.DATABASE_URL!,{ //El signo de exclamacion asegura que el archivo estara alli
  models:[join(__dirname, "../models")],              //Uso join(__dirname), para construir la ruta absoluta 

  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // importante si el certificado no es verificado por una CA pública
    },
  },
});

export default db;
