import { CarouselResponsive } from './CarouselResponsive';

export const Carousel = () => {

    const carouselImages = ["https://image01.realme.net/general/20230720/1689834560094cf75d9748ecc45aa81bf6f4d78e58658.jpg.webp","https://image01.realme.net/general/20230823/1692780921358bb312ffcfc5d4df3b451caf0d8b7740b.png.webp","https://image01.realme.net/general/20230828/16931946531817c15f42fbe4144a9937bdd3491234f70.jpg.webp"];
    
  return (
    <div>
        <CarouselResponsive images={carouselImages}/>
    </div>
  );
};
