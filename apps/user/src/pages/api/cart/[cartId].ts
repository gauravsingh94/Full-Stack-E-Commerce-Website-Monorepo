import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../lib/mongodb";
import { User } from "dbmodels";

type Data = {
  message?: string | object;
  error?: string;
  allCartItem?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "DELETE") {
    // Adding Product to the cart
    try {
      await connectDB();
      const cartId = req.query.cartId;
      const userId = req.body.userId;
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { cart: cartId } },
        { new: true }
      );
      if (user) {
        res.json({ message: "Cart item removed successfully." });
      } else {
        res.json({ error: "Not able to remove cart." });
      }
    } catch (error) {
      console.error("Error while removing product from cart :", error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else if (req.method === "PUT") {
    try {
      await connectDB();
      const userId = req.headers.userId;
      const cartId = req.query.cartId;
      const user = await User.findOneAndUpdate({ _id: userId,"cart._id":cartId },{$inc:{"cart.$.quantity":1}});
      if(user){
        res.json({message:"Product Increment successfully."});
      }
       else {
        res.json({ error: "No user with the given id." });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
