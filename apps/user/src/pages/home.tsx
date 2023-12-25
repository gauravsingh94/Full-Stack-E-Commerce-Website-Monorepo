import {
  CODCard,
  CategoryCard,
  FooterLg,
  FooterSm,
  Nav,
  SecurePaymentCard,
  ShippingCard,
  WarrentyPolicy,
  Carousel
} from "ui";
const WebsiteHomePage = () => {

  const CarouselImages = [
    "Carousel-Image-1.jpg",
    "Carousel-Image-2.jpg"
  ]
  
  return (
    <div>
      {/* upper part 🌳 */}
      <Nav />
      <div className="mt-[62px] lg:mt-[80px]">
        <Carousel images={CarouselImages}/>
      </div>
      {/* Categories part 🐼 */}
      <div className="flex flex-col items-center">
        <h1 className="font-inter lg:text-[36px] font-bold lg:mt-[91px] mt-[47px]">
          Category
        </h1>
        <div className="grid grid-cols-1 mt-[59px] lg:mt-[71px] lg:grid-cols-2 gap-[92px] justify-center items-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>

      {/* Services part */}
      <div className="flex flex-col items-center">
        <h1 className="font-inter lg:text-[36px] font-bold lg:mt-[91px] mt-[47px]">
          Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[176px] gap-y-[91px] mt-[59px]">
          <ShippingCard />
          <CODCard />
          <SecurePaymentCard />
          <WarrentyPolicy />
        </div>
      </div>

      {/* Footer part */}
      <div className="mt-[74px] lg:mt-[147px]">
        <div className="hidden lg:block">
          <FooterLg />
        </div>
        <div className="block lg:hidden">
          <FooterSm/>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHomePage;
