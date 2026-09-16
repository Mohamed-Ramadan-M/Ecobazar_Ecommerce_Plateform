import { Request, Response, NextFunction } from 'express';
import { apiError } from "../utils/apiErrorHandler.js";

export const globalErrorHandle = (err: apiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({
        status: err.status,
        data: {
            error: err,
            message: err.message,
            stack: err.stack
        }
    });
}