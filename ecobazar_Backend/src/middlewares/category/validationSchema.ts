import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const validatorMiddleware = (req:Request,res:Response , next:NextFunction)=>{

    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(400).json({status: "FAIL", data: errors.array()})
    }
    next()
}

