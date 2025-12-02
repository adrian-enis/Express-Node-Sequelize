import { Request, Response } from "express"
import {check, validationResult} from "express-validator"
import Product from "../models/Product.model"
import { errorMonitor } from "events"

export const createProduct = async(req : Request, res : Response) => {          
    
    
    //Validation


    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    const product = await Product.create(req.body) // Crea el producto en la BD y espera a que se genere su ID

    res.json({data: product})  //Returns the created product to the client in JSON format.
                  
    
}