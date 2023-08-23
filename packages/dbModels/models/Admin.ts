import mongoose,{Model,Document,Types} from "mongoose";
import { IAddress } from "./Address";

export interface IAdmin extends Document{
  username:string;
  password:string;
  firstName:string;
  lastName:string;
  address: Types.ObjectId | IAddress;
  phoneNo:string;
  createAt:Date;
  updatedAt:Date;
}

const adminSchema = new mongoose.Schema<IAdmin>({
  username: { type: String, require: true, unique: true },
  password: { type: String, unique: true },
  firstName: String,
  lastName: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  phoneNo: String,
  createAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const Admin:Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", adminSchema);

