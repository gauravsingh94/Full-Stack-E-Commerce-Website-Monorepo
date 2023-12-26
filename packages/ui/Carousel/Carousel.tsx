import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface CarouselProp{
  images:string[];
}

export const Carousel:React.FC<CarouselProp> = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: {
      width: '100%', // Set width to 100%
      height: 'auto', // Adjust height as needed
    },
  };
  return (
    <Slider {...settings}>
      {images.map((image,index)=>(
        <div key={index}>
          <img src={image} alt={`Slide + ${index+1}`} />
        </div>
      ))}
    </Slider>
  );
};
