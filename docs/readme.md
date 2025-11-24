# REST API Node.js, Express, TypeScript y PostgreSQL

Este es un proyecto de una API RESTful desarrollada con Node.js, Express, TypeScript y PostgreSQL. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los recursos de la base de datos.

## Características

*   **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
*   **Express:** Framework web para Node.js que facilita la creación de APIs.
*   **TypeScript:** Superset de JavaScript que añade tipado estático opcional.
*   **PostgreSQL:** Sistema de gestión de bases de datos relacional de código abierto.
*   **Sequelize:** ORM (Object-Relational Mapper) para Node.js que facilita la interacción con la base de datos.
*   **express-validator:** Middleware para la validación de datos en las solicitudes HTTP.
*   **dotenv:** Módulo para cargar variables de entorno desde un archivo `.env`.
*   **colors:** Librería para dar color a los mensajes en la consola.

## Scripts

*   `npm run dev`: Inicia el servidor en modo de desarrollo con `nodemon`, que reinicia automáticamente el servidor cada vez que se detecta un cambio en los archivos.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

*   `src/`: Contiene el código fuente de la aplicación.
    *   `config/`: Contiene los archivos de configuración, como la conexión a la base de datos.
    *   `handlers/`: Contiene los controladores de las rutas, que se encargan de la lógica de negocio.
    *   `middlewares/`: Contiene los middlewares, que son funciones que se ejecutan antes de que una solicitud llegue a su controlador.
    *   `models/`: Contiene los modelos de datos, que representan las tablas de la base de datos.
    *   `index.ts`: Punto de entrada de la aplicación.
    *   `router.ts`: Define las rutas de la API.
    *   `server.ts`: Crea y configura el servidor de Express.
*   `dist/`: Contiene el código compilado de TypeScript a JavaScript.
*   `node_modules/`: Contiene las dependencias del proyecto.
*   `.env`: Archivo que contiene las variables de entorno.
*   `.gitignore`: Archivo que especifica los archivos y carpetas que deben ser ignorados por Git.
*   `package.json`: Archivo que contiene la información del proyecto y las dependencias.
*   `tsconfig.json`: Archivo de configuración de TypeScript.
