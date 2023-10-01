import { FooterLg, Nav, ProductCard } from "ui";

const CategoryPage = () => {
  return (
    <div>
      <Nav />
      <h1 className="font-bold font-inter text-[27px] lg:text-[40px] mt-[100px] lg:mt-[160px] text-center">
        Watches
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 mt-[59px] lg:mt-[71px] lg:grid-cols-2 gap-[92px] justify-center items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-[150px]">
      <FooterLg/>
      </div>
    </div>
  );
};

export default CategoryPage;
