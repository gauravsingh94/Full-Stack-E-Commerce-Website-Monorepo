import mongoose, { Model, Document } from "mongoose";

export interface IAddress extends Document {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const addressSchema = new mongoose.Schema<IAddress>({
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
});

export const Address: Model<IAddress> = mongoose.models.Address || mongoose.model<IAddress>("Address", addressSchema);


