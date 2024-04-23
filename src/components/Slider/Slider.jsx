import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sertificate from '../../assets/slider/sertificate.png';
import sertificate2 from '../../assets/slider/sertificate2.png';
import sertificate3 from '../../assets/slider/sertificate3.png';
import sertificate4 from '../../assets/slider/sertificate4.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Button,
  ButtonContainer,
  Image,
  ImageContainer,
} from './Slider.styled';

const images = [sertificate, sertificate2, sertificate3, sertificate4];

const MySlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <ImageContainer>
              <Image src={image} alt={`Slide ${index + 1}`} />
            </ImageContainer>
          </div>
        ))}
      </Slider>
      <ButtonContainer>
        <Button onClick={goToPrev}>
          <FiChevronLeft />
        </Button>
        <Button onClick={goToNext}>
          <FiChevronRight />
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default MySlider;
