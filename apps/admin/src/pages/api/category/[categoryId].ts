import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../lib/mongodb";
import { Category } from "dbmodels";
import { categoryInputUpdate } from "../../../../../../packages/validators/validator";

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
    // Update the Category
    try {
      await connectDB();
      const categoryId = req.query.categoryId;
      const parsedInput = categoryInputUpdate.safeParse(req.body);
      if (!parsedInput.success) {
        res.status(411).json({ error: parsedInput.error.issues[0].message });
        return;
      }
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        parsedInput.data
      );

      if (!updatedCategory) {
        res.json({ message: "Category not updated." });
      } else {
        res.json({ message: "Category updated successfully." });
      }
    } catch (error) {
      console.error("Error while updating category :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "DELETE") {
    //Delete the product
    try {
      await connectDB();
      const categoryId = req.query.categoryId;
      const deletedCategory = await Category.findByIdAndDelete({
        _id: categoryId,
      });
      if (deletedCategory) {
        res.json({ message: "Category deleted successfully." });
      } else {
        res.json({ error: "Failed to delete the category." });
      }
    } catch (error) {
      console.error("Error while delete category :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "GET") {
    // Get the specific product with id
    try {
      await connectDB();
      const categoryId = req.query.categoryId;
      const ReqCategory = await Category.find({ _id: categoryId });
      if (ReqCategory) {
        res.json({ product: ReqCategory });
      } else {
        res.json({ message: "No category available with this id." });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
