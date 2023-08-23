import mongoose,{Model,Document} from "mongoose";
import { IRating } from "./Ratings";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: string;
    stock: number;
    images: string[]; 
    ratings: mongoose.Schema.Types.ObjectId | IRating;
    createdAt: Date;
    updatedAt: Date;
  }
  
const productSchema = new mongoose.Schema<IProduct>({
    name:{type:String,require:true,unique:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    stock:Number,
    images:[String],
    ratings:{type:mongoose.Schema.Types.ObjectId,ref:"Rating"},
    createdAt:{type:Date,default:Date.now},
    updatedAt:Date
});

export const Product:Model<IProduct> =mongoose.models.Product || mongoose.model<IProduct>("Product",productSchema);
