import { Address, IAddress } from "./models/Address";
import { Admin, IAdmin } from "./models/Admin";
import { CartItem, ICartItem } from "./models/CartItem";
import { Category, CategoryDocument } from "./models/Category";
import { Order, IOrder } from "./models/Order";
import { Product, IProduct } from "./models/Product";
import { Rating, IRating } from "./models/Ratings";
import { User, IUser } from "./models/User";

// Export types using 'export type'
export type {
  IAddress,
  IAdmin,
  ICartItem,
  CategoryDocument,
  IOrder,
  IRating,
  IProduct,
  IUser,
};

// Export models
export {
  Address,
  Admin,
  CartItem,
  Category,
  Order,
  Product,
  Rating,
  User,
};
