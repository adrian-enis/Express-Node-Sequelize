# Variables de Entorno

El proyecto utiliza un archivo `.env` para almacenar las variables de entorno. Estas variables son utilizadas para configurar la aplicación en diferentes entornos (desarrollo, producción, etc.).

## `DATABASE_URL`

*   **Descripción:** La URL de conexión a la base de datos PostgreSQL.
*   **Formato:** `postgresql://<user>:<password>@<host>:<port>/<database>`
*   **Ejemplo:** `postgresql://user:password@localhost:5432/mydatabase`

**Nota:** El valor de `DATABASE_URL` proporcionado en el archivo `.env` es un ejemplo y debe ser reemplazado por la URL de conexión a su propia base de datos.
