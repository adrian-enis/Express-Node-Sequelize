# Rutas de la API

La API de productos (`/api/products`) ofrece las siguientes rutas para interactuar con los recursos de productos:

## `GET /`

*   **Descripción:** Obtiene todos los productos.
*   **Controlador:** `getProduct`
*   **Respuesta Exitosa:**
    *   **Código:** 200 OK
    *   **Contenido:** `{ "data": [ { "id": 1, "name": "Producto 1", "price": 100 }, { "id": 2, "name": "Producto 2", "price": 200 } ] }`

## `GET /:id`

*   **Descripción:** Obtiene un producto por su ID.
*   **Controlador:** `getProductById`
*   **Parámetros de Ruta:**
    *   `id` (number): El ID del producto.
*   **Respuesta Exitosa:**
    *   **Código:** 200 OK
    *   **Contenido:** `{ "data": { "id": 1, "name": "Producto 1", "price": 100 } }`
*   **Respuesta de Error:**
    *   **Código:** 404 Not Found
    *   **Contenido:** `{ "error": "Producto No encontrado" }`

## `POST /`

*   **Descripción:** Crea un nuevo producto.
*   **Controlador:** `createProduct`
*   **Cuerpo de la Solicitud:**
    *   `name` (string, requerido): El nombre del producto.
    *   `price` (number, requerido): El precio del producto.
*   **Respuesta Exitosa:**
    *   **Código:** 200 OK
    *   **Contenido:** `{ "data": { "id": 3, "name": "Producto 3", "price": 300 } }`
*   **Respuesta de Error (Validación):**
    *   **Código:** 400 Bad Request
    *   **Contenido:** `{ "errors": [ { "msg": "El nombre del producto no puede ir vacio", "param": "name", "location": "body" } ] }`

## `PUT /`

*   **Descripción:** Actualiza un producto existente.
*   **Controlador:** (No implementado)

## `PATCH /`

*   **Descripción:** Actualiza parcialmente un producto existente.
*   **Controlador:** (No implementado)

## `DELETE /`

*   **Descripción:** Elimina un producto existente.
*   **Controlador:** (No implementado)

## `SEQUELIZE NOTA/`

*   **NOTA SEQUELIZE** Las instancias de Sequelize incluyen métodos y metadatos. Para acceder a los datos puros, usar .dataValues  o configurar {raw:true} en la consulta.