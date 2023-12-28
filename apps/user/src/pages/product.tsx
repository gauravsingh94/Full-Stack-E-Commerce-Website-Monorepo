import React from "react";
import {
  ImageProductCard,
  DescriptionProductCard,
  ActionProductCard,
  ProductCard,
  Nav,
  FooterLg,
  FooterSm,
} from "ui";

const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-28 lg:mt-48 flex-col">
        <Nav />
        <div className="flex gap-8 flex-col lg:flex-row justify-center items-center">
          <ImageProductCard />
          <div className="flex flex-col gap-9">
            <DescriptionProductCard />
            <ActionProductCard />
          </div>
        </div>

        <div>
          <h1 className="text-[32.678px] lg:text-[40px] font-bold mt-28 lg:mt-48 ">
            Recommended
          </h1>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-2 gap-8 mt-28">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>

        {/* Footer part */}
      <div className="mt-[74px] lg:mt-[147px]">
        <div className="hidden lg:block">
          <FooterLg />
        </div>
        <div className="block lg:hidden">
          <FooterSm />
        </div>
      </div>
    </>
  );
};

export default Product;
