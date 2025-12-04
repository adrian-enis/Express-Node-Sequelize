import { Router, type IRouter } from "express";
import { body } from "express-validator";
import { createProduct } from "../handlers/product";
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
router.get("/", (req, res) => {
  //Cada req - res, tiene sus propios metodos
  res.json("Desde GET");
});

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
router.put("/", (req, res) => {
  res.json("Desde PUT");
});

/** PATCH **/
router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

/** DELETE **/
router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
