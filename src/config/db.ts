import { Sequelize } from "sequelize";
import dotenv from "dotenv"


dotenv.config()
                     //El signo de exclamacion asegura que el archivo estara alli
const db = new Sequelize("postgresql://restapiandnodeandtsandsequelize_user:IdEvRtzDOAuY0sLs6ZYQKz3Rs4yrAQaH@dpg-d4ieccur433s739uqsog-a.virginia-postgres.render.com/restapiandnodeandtsandsequelize",{
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // importante si el certificado no es verificado por una CA pública
    },
  },
});

export default db;
