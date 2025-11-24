# Arquitectura del Proyecto

La arquitectura de este proyecto sigue un patrón de diseño en capas, que separa las responsabilidades en diferentes módulos para facilitar el mantenimiento y la escalabilidad de la aplicación.

## Capas de la Aplicación

1.  **Capa de Presentación (Presentation Layer):**
    *   **`server.ts`:** Este archivo es el punto de entrada de la aplicación. Se encarga de crear y configurar el servidor de Express, conectar a la base de datos y montar el enrutador principal.
    *   **`router.ts`:** Define las rutas de la API y las asocia con los controladores correspondientes. También se encarga de la validación de los datos de entrada utilizando `express-validator`.

2.  **Capa de Lógica de Negocio (Business Logic Layer):**
    *   **`handlers/`:** Esta carpeta contiene los controladores de las rutas. Cada controlador es responsable de manejar una solicitud HTTP específica, procesar los datos de entrada, interactuar con la capa de acceso a datos y enviar una respuesta al cliente.

3.  **Capa de Acceso a Datos (Data Access Layer):**
    *   **`config/db.ts`:** Este archivo se encarga de la configuración y conexión a la base de datos PostgreSQL utilizando Sequelize.
    *   **`models/`:** Esta carpeta contiene los modelos de datos de Sequelize, que representan las tablas de la base de datos y definen sus esquemas.

4.  **Capa de Middleware (Middleware Layer):**
    *   **`middlewares/`:** Esta carpeta contiene los middlewares de Express. Los middlewares son funciones que se ejecutan antes de que una solicitud llegue a su controlador. Se utilizan para tareas como la autenticación, el registro de solicitudes y el manejo de errores.

## Flujo de una Solicitud

1.  Una solicitud HTTP llega al servidor de Express (`server.ts`).
2.  La solicitud pasa a través del enrutador (`router.ts`), que determina qué controlador debe manejarla en función de la URL y el método HTTP.
3.  Antes de que la solicitud llegue al controlador, puede pasar por uno o más middlewares (`middlewares/`) que realizan tareas de pre-procesamiento.
4.  El controlador (`handlers/`) procesa la solicitud, interactúa con la base de datos a través de los modelos de Sequelize (`models/`) y genera una respuesta.
5.  La respuesta se envía de vuelta al cliente.
