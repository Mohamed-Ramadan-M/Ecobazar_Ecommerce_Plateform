import { NextFunction, Request, Response } from "express";
import { CategoryModel } from '../models/category.model.js'
import slugify from "slugify";
import asyncHandler from "express-async-handler"
import { apiError } from "../utils/apiErrorHandler.js";

// @desc    Get All Categories with pagination
// @route   Get /api/v1/category
// @params  limit , page
// @access  Public
export const getCategories = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query
    const limit = parseInt(query.limit as string) || 10
    const page = parseInt(query.page as string) || 1
    const skip = (page - 1) * limit
    const categories = await CategoryModel.find().limit(limit).skip(skip)
    res.status(200).json({ status: "Success", length: categories.length, data: { category: categories } })
})

// @desc    Get Category by id
// @route   GET /api/v1/category/:id
// @access  Public
export const getCategoryById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const category = await CategoryModel.findById(id)
    if (!category)
        return next(new apiError("no category for this id", 404))

    res.status(200).json({ status: "Success", data: { category: category } })
})

// @desc    Create Category
// @route   POST /api/v1/category
// @access  Private
export const createCategory = asyncHandler(async (req: Request, res: Response) => {

    let name = req.body.name
    console.log(name)
    const category = await CategoryModel.create({ name, slug: slugify(name) })

    await category.save()
    res.status(201).json({ status: "Success", data: { category } })
})

// @desc    Update Specific Category 
// @route   PUT /api/v1/category/:id
// @access  Private
export const updateCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const { name } = req.body
    const category = await CategoryModel.findOneAndUpdate({ _id: id }, { name, slug: slugify(name) }, { new: true })
    if (!category)
        return next(new apiError("no category for this id", 404))
    res.status(200).json({ status: "Success", data: { category: category } })
})

// @desc    Delete Specific Category 
// @route   DELETE /api/v1/category/:id
// @access  Private
export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const category = await CategoryModel.findOneAndDelete({ _id: id })
    if (!category)
        return next(new apiError("no category for this id", 404))
    res.status(200).json({ status: "Success", data: { category: category } })

})

