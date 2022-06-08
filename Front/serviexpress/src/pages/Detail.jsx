import NavDetail from '../components/NavDetail'
import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';
import CardSellerDetail from '../components/CardSellerDetail';
import CardOthersServices from '../components/CardOthersServices';
import ProfileOpinion from '../components/ProfileOpinion';
import Footer from '../components/FooterDetail';
import NavBar from '../components/NavBar/NavBar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination'

export default function Detail(){
    return <div className={stylesDetail.container}>
        <NavBar></NavBar>
          <div>
          <Pagination className={stylesDetail.paginate}>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item >{"Electrician"}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{"Plumb"}</Pagination.Item>
  <Pagination.Item>{"Worker"}</Pagination.Item>
  <Pagination.Item active>{"Barber"}</Pagination.Item>
  <Pagination.Item>{"Carpenter"}</Pagination.Item>
  <Pagination.Item disabled>{"Constructor"}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{"Painter"}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
  </Pagination>

          </div>


        <div className={stylesDetail.division}>
        <div>
          <div>
          <Breadcrumb className={stylesDetail.anchors} >
          <Breadcrumb.Item href="#" >Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
          Services
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Detail</Breadcrumb.Item>
          </Breadcrumb>

          </div>



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
        
        <h2>We Recommend Also...</h2>
        
        <div className={stylesDetail.cardOthers}>
        <button className={stylesDetail.btnFowardBack}>a</button>
        <CardOthersServices></CardOthersServices>
        <CardOthersServices></CardOthersServices>
        <button className={stylesDetail.btnFowardBack}>h</button>

        </div>

        <div className={stylesDetail.opinion} >

          <ProfileOpinion></ProfileOpinion>
          <ProfileOpinion></ProfileOpinion>
          <ProfileOpinion></ProfileOpinion>
          <ProfileOpinion></ProfileOpinion>
        </div>
       
    </div>
    <CardSellerDetail></CardSellerDetail>

    </div>
     <Footer></Footer>
    </div>

};