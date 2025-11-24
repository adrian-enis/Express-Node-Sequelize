# Middleware

El proyecto utiliza un middleware personalizado para manejar los errores de validación de `express-validator`.

## `handleInputErrors`

*   **Descripción:** Este middleware se encarga de verificar si hay errores de validación en la solicitud. Si se encuentran errores, responde con un código de estado 400 (Bad Request) y un JSON que contiene los errores. Si no hay errores, pasa el control al siguiente middleware o al controlador de la ruta.
*   **Uso:** Se utiliza en las rutas que requieren validación de datos, después de las funciones de validación de `express-validator`.

### Ejemplo de Uso

```typescript
router.post(
  "/",
  //Validacion
  body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacio"),
  body("price")
    .isNumeric()
    .withMessage("valor no valido")
    .notEmpty()
    .withMessage("El precio del producto no puede estar vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no valido"),
  handleInputErrors, // Middleware de manejo de errores
  createProduct
);
```
