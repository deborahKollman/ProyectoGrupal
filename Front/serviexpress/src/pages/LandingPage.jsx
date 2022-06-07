import React from 'react'
import Styles from './LandingPage.module.scss'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

const LandingPage = () => {

  // function ControlledCarousel() {
  //   let [index, setIndex] = useState(0);
  
  //   let handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };
  // }

  return (
    <div className={Styles.landingctn}>
     <h1 className={Styles.title}>ServiExpress</h1>
      <div className={Styles.descriptionctn}>
       <p className={Styles.description}>Find the services you are looking for. You get everything you need in one place.</p>
     </div>
     <h3 className={Styles.subtitle}>Popular professional services</h3>
  
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
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>
    </div>
  )
}

export default LandingPage