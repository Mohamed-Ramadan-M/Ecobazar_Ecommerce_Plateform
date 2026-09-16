import {  check } from 'express-validator';
import { validatorMiddleware } from '../../../middlewares/category/validationSchema.js';

export const getSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid Mongo Id"),
    validatorMiddleware
]

export const subCategoryValidationSchema = [
    check("name")
        .notEmpty()
        .withMessage("category name is not valid ")
        .isLength({ min: 2 })
        .withMessage("category name should be at least 2 character"),
        validatorMiddleware
]
