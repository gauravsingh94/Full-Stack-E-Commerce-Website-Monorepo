import mongoose,{Document,Model} from "mongoose";
import { IAddress } from "./Address";
import { IOrder } from "./Order";
import { ICartItem } from "./CartItem";

export interface IUser extends Document{
  username:string;
  password:string;
  firstName:string;
  lastName:string;
  address:mongoose.Types.ObjectId | IAddress;
  phoneNo:string;
  cart:mongoose.Types.ObjectId | ICartItem;
  orders:mongoose.Types.ObjectId | IOrder;
  createAt:Date;
  updatedAt:Date;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, require: true, unique: true },
  password: { type: String, unique: true },
  firstName: String,
  lastName: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  phoneNo: String,
  cart:{type:mongoose.Schema.Types.ObjectId,ref:"CartItem"},
  orders: { type: mongoose.Schema.Types.ObjectId, ref: "Orders" },
  createAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const User:Model<IUser> =mongoose.models.User || mongoose.model<IUser>("User", userSchema);
