import { BrandIcon } from "./BrandIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

export const Nav = () => {
  return (
    <div className="fixed top-0 w-full  h-[62px] lg:h-[80px] font-inter flex justify-between items-center  px-[32px] lg:px-[137px] bg-white z-50">
      <BrandIcon />       

      {/* All the contents of the Nav bar */}
      <div className="hidden lg:flex ">
        <button className="mr-[63px]">Home</button>
        <button className="mr-[63px]">Products</button>
        <div className="mr-[63px]">
          <button>
            <ShoppingCartIcon />
          </button>
        </div>
        <div className="mr-[63px]">
          <button>
            <PersonIcon />
          </button>
        </div>
      </div>
    
        {/* Hamburger menu for small devices only */}
      <div className="block lg:hidden">
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};
