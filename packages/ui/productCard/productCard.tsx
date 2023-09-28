import { ExploreButton } from "./ExploreButton";

export const ProductCard = () => {
  return (
    <div className="h-[238px] w-[367px] lg:h-[326px] lg:w-[565px] flex justify-center items-center border-[2] rounded-[12px] shadow-lg  ">
      <div>
      <img
        src="/watch-img.png"
        className="h-[131px] w-[136[px]] lg:h-[276px] lg:w-[319px]"
        alt=""
      />
      <h1>Price </h1>
      </div>

      <div>
        <h1 className="text-[20px] lg:text-[40px] font-inter">Watches</h1>
        <p className="w-[153.067px] text-[11px] lg:text-[16px] lg:w-[214px] mt-[20px] lg:mt-[30px]">
          Vivamus vitae tellus risus. Nam purus neque, placerat congue libero
          et, lobortis posuere augue. Praesent posuere a sem et auctor.
        </p>
        <div className="mt-[20px]">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
};
