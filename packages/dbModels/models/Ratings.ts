import mongoose,{Model,Document} from "mongoose";
import { IProduct } from "./Product";

export interface IRating extends Document{
    product:mongoose.Types.ObjectId | IProduct;
    number:number;
}

const ratingSchema = new mongoose.Schema<IRating>({
    product:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    number:Number
});


export const Rating:Model<IRating>  =mongoose.models.Rating|| mongoose.model<IRating>("Rating",ratingSchema);
