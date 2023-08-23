import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../lib/mongodb";
import { User } from "dbmodels";

type Data = {
  message?: string | object;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   if (req.method === "PUT") {
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
