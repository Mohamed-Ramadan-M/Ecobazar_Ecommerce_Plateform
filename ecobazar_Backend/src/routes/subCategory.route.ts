import express, { NextFunction, Request, Response } from 'express';
// import { param, validationResult } from 'express-validator';
import { ValidationSchema } from '../utils/validation/category/categoryValidator.js';
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategoryById, updateSubCategory } from '../controllers/subCategory.controller.js';
import { getSubCategoryValidator } from '../utils/validation/subCategory/subCategoryValidator.js';

export const subCategoriesRouter = express.Router()
subCategoriesRouter.route("/")
    .get(getSubCategories)
    .post(ValidationSchema, createSubCategory)


subCategoriesRouter.route("/:id")
    .get(getSubCategoryValidator, getSubCategoryById)
    .patch(updateSubCategory)
    .delete(deleteSubCategory)