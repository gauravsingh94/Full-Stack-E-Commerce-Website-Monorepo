import mongoose, { Document, Model, Types } from "mongoose";
import { IProduct } from "./Product";

export interface CategoryDocument extends Document {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  product: mongoose.Types.ObjectId[] | IProduct[];
  createAt: Date;
  updatedAt?: Date;
}

const categorySchema = new mongoose.Schema<CategoryDocument>({
  name: { type: String, required: true },
  description: { type: String },
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export const Category: Model<CategoryDocument> =mongoose.models.Category|| mongoose.model<CategoryDocument>("Category", categorySchema);

