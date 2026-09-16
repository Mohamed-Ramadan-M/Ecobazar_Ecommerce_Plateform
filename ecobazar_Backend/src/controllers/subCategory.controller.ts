import { NextFunction, Request, Response } from "express";
import slugify from "slugify";
import asyncHandler from "express-async-handler"
import { apiError } from "../utils/apiErrorHandler.js";
import { SubCategoryModel } from "../models/subCategories.model.js";

// @desc    Get All SubCategories with pagination
// @route   Get /api/v1/subcategory
// @params  limit , page
// @access  Public
export const getSubCategories = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query
    const limit = parseInt(query.limit as string) || 10
    const page = parseInt(query.page as string) || 1
    const skip = (page - 1) * limit
    const subCategories = await SubCategoryModel.find().limit(limit).skip(skip)
    res.status(200).json({ status: "Success", length: subCategories.length, data: { category: subCategories } })
})

// @desc    Get Category by id
// @route   GET /api/v1/subcategory/:id
// @access  Public
export const getSubCategoryById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const subCategory = await SubCategoryModel.findById(id)
    if (!subCategory)
        return next(new apiError("no subcategory for this id", 404))

    res.status(200).json({ status: "Success", data: { category: subCategory } })
})


// @desc    Create SubCategory
// @route   POST /api/v1/subcategory
// @access  Private
export const createSubCategory = asyncHandler(async (req: Request, res: Response) => {
    let { name, category } = req.body

    const subCategory = await SubCategoryModel.create({
        name,
        slug: slugify(name),
        category
    })

    await subCategory.save()
    res.status(201).json({ status: "Success", data: { subCategory } })
})

// @desc    Update Specific subCategory 
// @route   PUT /api/v1/subcategory/:id
// @access  Private
export const updateSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const { name, category } = req.body
    const subCategory = await SubCategoryModel.findOneAndUpdate({ _id: id }, { name, slug: slugify(name), category }, { new: true })
    if (!subCategory)
        return next(new apiError("no subCategory for this id", 404))
    res.status(200).json({ status: "Success", data: { category: subCategory } })
})

// @desc    Delete Specific subCategory 
// @route   DELETE /api/v1/subcategory/:id
// @access  Private
export const deleteSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const subCategory = await SubCategoryModel.findOneAndDelete({ _id: id })
    if (!subCategory)
        return next(new apiError("no subCategory for this id", 404))
    res.status(200).json({ status: "Success", data: { category: subCategory } })

})
