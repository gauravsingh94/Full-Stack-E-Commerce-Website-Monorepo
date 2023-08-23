import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../lib/mongodb";
import { Product } from "../../../../../../packages/dbModels/models/Product";
import { productInput } from "../../../../../../packages/validators/validator";

type Data = {
  message?: string;
  error?: string;
  product?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    // Update the Product
    try {
      await connectDB();
      const productId = req.query.productId;
      const parsedInput = productInput.safeParse(req.body);
      if (!parsedInput.success) {
        res.status(411).json({ error: parsedInput.error.issues[0].message });
        return;
      }
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        parsedInput.data
      );

      if (!updatedProduct) {
        res.json({ message: "Product not updated." });
      } else {
        res.json({ message: "Product updated successfully." });
      }
    } catch (error) {
      console.error("Error while adding the new product :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "DELETE") {
    //Delete the product
    try {
      await connectDB();
      const productId = req.query.productId;
      const deletedProduct = await Product.findByIdAndDelete({
        _id: productId,
      });
      if (deletedProduct) {
        res.json({ message: "Product deleted successfully." });
      } else {
        res.json({ error: "Failed to delete the product." });
      }
    } catch (error) {
      console.error("Error while adding the new product :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "GET") {
    // Get the specific product with id
    try {
      await connectDB();
      const productId = req.query.productId;
      const ReqProduct = await Product.find({ _id: productId });
      if (ReqProduct) {
        res.json({ product: ReqProduct });
      } else {
        res.json({ message: "No product available with this id." });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
