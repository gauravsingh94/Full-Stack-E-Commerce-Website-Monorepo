import mongoose,{Types,Model,Document} from "mongoose";
import { IProduct } from "./Product";

export interface ICartItem extends Document{
    product:Types.ObjectId | IProduct;
    quantity:number;
}

const cartItemSchema = new mongoose.Schema<ICartItem>({
    product:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    quantity:Number,
});

export const CartItem:Model<ICartItem> = mongoose.models.CartItem || mongoose.model<ICartItem>("CartItem",cartItemSchema);
