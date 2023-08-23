import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/mongodb";
import {
  Product,
  IProduct,
} from "../../../../../packages/dbModels/models/Product";
import { productInput } from "../../../../../packages/validators/validator";

type Data = {
  message?: IProduct[] | string;
  error?:string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {          // Adding product to the database
    try {
      await connectDB();
      const parsedInput = productInput.safeParse(req.body);
      if (!parsedInput.success) {
        res.status(411).json({ error: parsedInput.error.issues[0].message });
        return;
      }
      const newProduct = new Product(parsedInput.data);
      await newProduct.save();
      res.json({ message: "New Product added successfully." });
    } catch (error) {
      console.error("Error while adding the new product :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "GET") {   // Getting all the product from the database.
    try {
      await connectDB();
      const allProducts: IProduct[] = await Product.find({});
      if (allProducts) {
        res.json({ message: allProducts });
      } else {
        res.json({ message: "No product found." });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
