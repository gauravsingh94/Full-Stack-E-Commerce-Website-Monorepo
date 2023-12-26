import { Buy } from "./BuyButton";
import { AddButton } from "./AddButton";
import { SubButton } from "./AddButton";
export const ProductCard = () => {
  return (
    <div className="h-[406px] w-[260px] lg:h-[326px] lg:w-[565px] flex justify-center items-center border-[2] rounded-[12px] shadow-lg  flex-col lg:flex-row">
      <div className="flex-row items-center mr-[40px]">
        <img src="/watch-img.png" className="h-[131px] w-[136[px]] " alt="" />
        <h1 className="font-inter text-xl text-center mt-5">Price 10000</h1>
      </div>

      <div className="md:text-center">
        <h1 className="text-[20px] lg:text-[40px] font-inter">Watches</h1>
        <p className="w-[153.067px] text-[11px] lg:text-[16px] lg:w-[214px] mt-[20px] lg:mt-[30px]">
          Vivamus vitae tellus risus. Nam purus neque, placerat congue libero
          et, lobortis posuere augue. Praesent posuere a sem et auctor.
        </p>
        <div className="mt-[20px] flex justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <AddButton />
            </div>
            0
            <div className="ml-2">
              <SubButton />
            </div>
          </div>
          <Buy />
        </div>
      </div>
    </div>
  );
};
