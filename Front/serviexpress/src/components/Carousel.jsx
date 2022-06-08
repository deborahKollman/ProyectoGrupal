import React from "react";
import Carousel from "react-bootstrap/Carousel";

const RctBoostCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/foto-gratis/arquitecto-sexo-femenino-sitio-construccion_1157-36105.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/mundo/image/upload/c_scale,w_412,h_216,dpr_2/f_jpg,q_auto:good/v1649828915/shutterstock_236457916.jpg?_i=AA"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/foto-gratis/carpintero-experimentado-ropa-trabajo-propietario-pequena-empresa-que-trabaja-taller-carpinteria_116124-2124.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default RctBoostCarousel;
