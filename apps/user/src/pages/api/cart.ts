import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/mongodb";
import { CartItem,User } from "dbmodels";
import { cartInput } from "../../../../../packages/validators/validator";

type Data = {
  message?: string | object;
  error?: string;
  allCartItem?:object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Adding Product to the cart
    try {
      await connectDB();
      const parsedInput = cartInput.safeParse(req.body);
      if (!parsedInput.success) {
        res.status(411).json({ error: parsedInput.error.issues[0].message });
        return;
      }
      const { userId, productId, quantity } = parsedInput.data;
      const newCartItem = new CartItem({product:productId,quantity:quantity});
      await newCartItem.save();

      await User.findOneAndUpdate({_id:userId},{$push:{cart:newCartItem._id}});

      res.json({message:"Product added to the cart successfully."});
      
    } catch (error) {
      console.error("Error while adding product to cart :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
  else if(req.method==="GET"){     
    //Getting all the product from the cart.
    try {
        await connectDB();
        const userId = req.headers.userId;
        const user =await User.findOne({_id:userId}).populate("cart");
        if(user){
            res.json({allCartItem:user.cart});
        }
        else{
            res.json({error:"No user with the given id."});
        }
    } catch (error) {
        console.error("Error:", error);
    }   
  }
   else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
