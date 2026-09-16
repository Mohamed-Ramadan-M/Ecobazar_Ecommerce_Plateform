import { body, check, param, validationResult } from 'express-validator';
import { validatorMiddleware } from '../../../middlewares/category/validationSchema.js';

export const getCategoryValidator = [
    param('id').isMongoId().withMessage("Invalid Mongo Id"),
    validatorMiddleware
]

export const ValidationSchema = [
    body("name")
        .notEmpty()
        .withMessage("category name is not valid ")
        .isLength({ min: 2 })
        .withMessage("category name should be at least 2 character"),
        validatorMiddleware
]