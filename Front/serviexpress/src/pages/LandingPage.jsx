import React from "react";
import Styles from "./styles/LandingPage.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FooterBar from "../components/FooterBar/FooterBar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={Styles.landingctn}>
      <h1 className={Styles.title}>ServiExpress</h1>

      <div className={Styles.btn1}>
        <Button
          variant="text"
          onClick={() => navigate("/login")}
          sx={{
            color: "black",
            fontSize: 16,
          }}
        >
          Login
        </Button>
      </div>

      <div className={Styles.btn2}>
        <Button
          variant="text"
          onClick={() => navigate("/home")}
          sx={{
            color: "black",
            fontSize: 16,
          }}
        >
          Home
        </Button>
      </div>

      <div className={Styles.descriptionctn}>
        <p className={Styles.description}>
          Find the services you are looking for. You get everything you need in
          one place.
        </p>
      </div>
      <div className={Styles.subtitle}>Popular professional services</div>

      <div className={Styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img
              className={Styles.image}
              src="https://img.freepik.com/foto-gratis/arquitecto-sexo-femenino-sitio-construccion_1157-36105.jpg?w=2000"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Architecture</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className={Styles.image}
              src="https://res.cloudinary.com/mundo/image/upload/c_scale,w_412,h_216,dpr_2/f_jpg,q_auto:good/v1649828915/shutterstock_236457916.jpg?_i=AA"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Plumbing</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className={Styles.image}
              src="https://img.freepik.com/foto-gratis/carpintero-experimentado-ropa-trabajo-propietario-pequena-empresa-que-trabaja-taller-carpinteria_116124-2124.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Carpentry</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <FooterBar />
    </div>
  );
};

export default LandingPage;
