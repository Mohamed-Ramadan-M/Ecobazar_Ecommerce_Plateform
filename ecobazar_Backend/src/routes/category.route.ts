import express, { NextFunction, Request, Response } from 'express';
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controllers/category.controller.js';
import { param, validationResult } from 'express-validator';
import { getCategoryValidator, ValidationSchema } from '../utils/validation/category/categoryValidator.js';

export const categoriesRouter = express.Router()

categoriesRouter.route("/")
    .get(getCategories)
    .post(ValidationSchema, createCategory)

categoriesRouter.route("/:id")
    .get(getCategoryValidator, getCategoryById)
    .patch(updateCategory)
    .delete(deleteCategory)