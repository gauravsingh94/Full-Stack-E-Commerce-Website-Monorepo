import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/mongodb";
import { CategoryDocument,Category } from "dbmodels";
import { categoryInputUpdate } from "../../../../../packages/validators/validator";

type Data = {
  message?: CategoryDocument[] | string|object;
  error?:string;
  
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {          // Adding Category to the database
    try {
      await connectDB();
      const parsedInput = categoryInputUpdate.safeParse(req.body);
      if (!parsedInput.success) {
        res.status(411).json({ error: parsedInput.error.issues[0].message });
        return;
      }
      const newCategory = new Category(parsedInput.data);
      await newCategory.save();
      res.json({ message: "New Category added successfully." });
    } catch (error) {
      console.error("Error while adding the new product :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "GET") {   // Getting all the Category from the database.
    try {
      await connectDB();
      const allCategory: CategoryDocument[] = await Category.find({});
      if (allCategory) {
        res.json({ message: allCategory });
      } else {
        res.json({ message: "No Category found." });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
