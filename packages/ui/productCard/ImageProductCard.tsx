export const ImageProductCard = () => {
  return (
    <div className="w-[261.222px] h-[289px] lg:w-[489px] lg:h-[541px] rounded-xl bg-white shadow-md flex justify-center flex-col items-center">
      <div className="w-[142px] h-[117.914px] lg:w-[265.82px] lg:h-[220.732px]">
        <img src="/watch-img.png" alt="" />
      </div>
      <h1 className="text-black font-inter text-base font-normal text-center mt-4 lg:mt-9 lg:text-[36.289px]">
        Random watch 1
      </h1>
      <h1 className="text-black font-inter text-base font-normal text-center mt-4 lg:mt-9 lg:text-[32px]">
        Price ₹10000
      </h1>
    </div>
  );
};
