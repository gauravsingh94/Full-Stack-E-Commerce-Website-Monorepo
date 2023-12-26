import { AddButton, SubButton } from "./ProductRecomendationCard/AddButton";
import { CartButton } from "./CardButton";
import { Buy } from "./ProductRecomendationCard/BuyButton";

export const ActionProductCard = () => {
  return (
    <div className="w-[337px] h-[66px] lg:w-[650px] lg:h-[112px] rounded-xl bg-white shadow-md flex justify-between items-center px-5 lg:px-24">
      <div className="flex space-x-4">
        <AddButton />
        <span>0</span>
        <SubButton />
      </div>
      <div>
        <CartButton />
      </div>
      <div>
        <Buy />
      </div>
    </div>
  );
};
