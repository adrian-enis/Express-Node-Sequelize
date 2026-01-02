import { Router, type IRouter } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "../handlers/product";
import { handleInputErrors } from "../middleware";

//Esto le dice a TypeScript que router es del tipo IRouter, que es el tipo público y portable para routers en Express.
const router: IRouter = Router();

//Routing
/** router.get, sirve para verificar
 * si nuestro puerto, ademas de escuchar
 * por las conexiones, verifica que el
 * servidor este respondiendo a las solicitudes
 * El routing, define que debe responder el servidor
 * segun la ruta
 */

/** GET **/
router.get("/", getProducts);

/** GET By ID **/
router.get(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  getProductById //Dinamic Routing express
);

/** POST **/
router.post(
  "/",
  body("name").notEmpty().withMessage("The product name cannot be empty."),
  body("price")
    .isNumeric()
    .withMessage("invalid value")
    .notEmpty()
    .custom((value) => value > 0)
    .withMessage("Invalid value")
    .withMessage("The product price cannot be empty."),
  handleInputErrors,
  createProduct
);

/** PUT **/
router.put(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  body("name").notEmpty().withMessage("The product name cannot be empty."),
  body("price")
    .isNumeric()
    .withMessage("invalid value")
    .notEmpty()
    .custom((value) => value > 0)
    .withMessage("Invalid value")
    .withMessage("The product price cannot be empty."),
  body("availability")
    .isBoolean()
    .withMessage("Value for availability not valid"),
  handleInputErrors,
  updateProduct
);

/** PATCH **/
router.patch(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  updateAvailability
);

/** DELETE **/
router.delete(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  deleteProduct

);

export default router;
