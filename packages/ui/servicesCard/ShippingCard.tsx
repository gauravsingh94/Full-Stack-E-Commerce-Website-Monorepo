export const ShippingCard = () => {
  return (
    <div className="h-[132px] w-[366px] lg:h-[234px] lg:w-[466px]  rounded-lg bg-[#F2F2F2]  py-[23px] px-[41px] lg:px-[43px]">
        <img className="h-[36px] w-[36px] lg:h-[71px] lg:w-[71px]" src="/box.png" alt="" />
        <div>
            <h1 className="font-inter font-bold mt-[10px] lg:text-[32px]">Free Shipping</h1>
            <p className="font-inter text-[#828282]  lg:text-[24px]">Available for order over 500.</p>
        </div>
    </div>
  );
};

