import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstBanner from "../../images/banner.png";
import SecondBanner from "../../images/banner5.jpg";
import ThirdBanner from "../../images/banner4.png";

export default () => {
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100 " src={FirstBanner} alt="First slide" />
          <Carousel.Caption>
            <h3>Shop-Online</h3>
            <p>one of leading e-commerce website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SecondBanner} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ThirdBanner} alt="Third slide" />

          <Carousel.Caption>
            <h3>Mobile phone exchange offer</h3>
            <p>
              lets you exchange your old mobile for a new mobile at the right
              prices.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
