import { Schema, model } from "mongoose"

interface ICategory {
    name : string;
    slug : string;
    image : string; 
}
const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: [true, 'category require '],
        unique: true,
        minlength: [3, 'too short category name'],
        maxlength: [32, 'too long category name'],
    },
    slug:{
        type : String,
        lowercase : true
    },
    image:{
        type : String
    }
}, {timestamps:true})

export const CategoryModel = model<ICategory>('Category', categorySchema)