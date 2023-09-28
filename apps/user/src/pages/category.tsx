import { FooterLg, Nav, ProductCard } from "ui";

const CategoryPage = () => {
  return (
    <div>
      <Nav />

      <div className="grid grid-cols-1 mt-[59px] lg:mt-[71px] lg:grid-cols-2 gap-[92px] justify-center items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategoryPage;
