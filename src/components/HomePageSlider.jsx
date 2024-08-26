import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slidesData from "../data/slidesData.json";

function HomePageSlider() {
  return (
    <Carousel data-bs-theme="dark">
      {slidesData.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.src} alt={slide.alt} />
          <Carousel.Caption>
            <h5>{slide.label}</h5>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomePageSlider;
