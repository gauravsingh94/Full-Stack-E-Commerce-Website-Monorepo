import mongoose,{Document,Types,Model} from "mongoose";
import { IUser } from "./User";
import { IProduct } from "./Product";

export interface IOrder extends Document{
    user:Types.ObjectId | IUser;
    product:Types.ObjectId | IProduct;
    quantity:number;
}

const orderSchema = new mongoose.Schema<IOrder>({
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User"},
    product: {type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    quantity:Number
});

export const Order:Model<IOrder> =mongoose.models.Order || mongoose.model<IOrder>("Order",orderSchema);



