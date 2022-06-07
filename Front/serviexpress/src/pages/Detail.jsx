import NavDetail from '../components/NavDetail'
import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';
import CardSellerDetail from '../components/CardSellerDetail';


export default function Detail(){
    return <div className={stylesDetail.container}>
        <h1 className={stylesDetail.title}>ServiExpress</h1>

    <NavDetail></NavDetail>
        <div className={stylesDetail.division}>
        <div>
        <div className={stylesDetail.carousel}>
     <Carousel fade>
       <Carousel.Item>
       <img
         className="d-block w-100"
        src="https://images.unsplash.com/photo-1508188609340-e8068b599193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
           alt="First slide"
         />
     <Carousel.Caption>
          <h3>First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
       src="https://images.unsplash.com/photo-1618947084583-07ff857ca918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VsZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Third slide"
       />

    <Carousel.Caption>
         <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

        <div className={stylesDetail.about}>
        <h3>About Services</h3>
           <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

        </p>
            <button>Ver Mas</button>
        </div>

    </div>
    <CardSellerDetail></CardSellerDetail>

    </div>

    </div>

};