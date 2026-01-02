import { Request, Response } from "express";

import Product from "../models/Product.model";


export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      where:{visible:true},
      order: [["id", "DESC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); // Get ID by parameter
      
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  //Validation

  try {
    const product = await Product.create(req.body); // Crea el producto en la BD y espera a que se genere su ID
    res.json({ data: product }); //Returns the created product to the client in JSON format.
  } catch (error) {
    console.log(error);
  }
};

// UPDATE DATA
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }
  await product.update(req.body); //Update data
  await product.save();
  console.log(product.dataValues)
  res.json({ data: product });
};

//UPDATE AVAILABILITY


export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  product.availability = !product.dataValues.availability
  await product.save()
  console.log(product.dataValues.availability)
  res.json({data: product})

}

//DELETE PRODUCT

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  product.visible = false;
  await product.save();
  res.json({data: "Product successfully removed", product})
}