import { Request, Response } from "express"

import Product from "../models/Product.model"


export const createProduct = async(req : Request, res : Response) => {          
    
    
    //Validation

    try {
        const product = await Product.create(req.body) // Crea el producto en la BD y espera a que se genere su ID
         res.json({data: product})  //Returns the created product to the client in JSON format.
    } catch (error) {
        console.log(error)
    }
 
    

   
                  
    
}