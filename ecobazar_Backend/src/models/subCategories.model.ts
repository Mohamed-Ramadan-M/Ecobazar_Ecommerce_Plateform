import { Schema, model, Types } from "mongoose"

interface ISubCategory {
    name : string;
    slug : string;
    category : Types.ObjectId; 
}
const subCategorySchema = new Schema<ISubCategory>({
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
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:[true , 'SubCategory must be belong to parent category']
    }
}, {timestamps:true})

export const SubCategoryModel = model<ISubCategory>('subCategory', subCategorySchema)