
import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';
import CardSellerDetail from '../components/CardSellerDetail';
import CardOthersServices from '../components/CardOthersServices';
import ProfileOpinion from '../components/ProfileOpinion';
import Footer from '../components/FooterDetail';
import NavBar from '../components/NavBar/NavBar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ServicesBar from '../components/ServicesBar';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {getById} from '../redux/action.js';
import { useParams } from 'react-router-dom';

export default function Detail(){
    const {id} = useParams();

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);

    const [text,setText] = useState(detail.detail_resume);


    useEffect(() => {
        dispatch(getById(id));

    },[dispatch,id]);

    const handleClick = (e) => {
        e.preventDefault();
        setText(detail.detail);
    };

    console.log(text);
     
    return <div className={stylesDetail.container}>
        <NavBar></NavBar>
          <div>
         {/*    <ServicesBar></ServicesBar> */}
          </div>


        <div className={stylesDetail.division}>
        <div className={stylesDetail.leftSide}>
          <div>
          <Breadcrumb className={stylesDetail.anchors} >
          <Breadcrumb.Item href="/home" >Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
          Services
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{detail.title}</Breadcrumb.Item>
          </Breadcrumb>

          </div>
          <div className={stylesDetail.title}>
                <label>Publicado el: </label>
               <p > {detail.date}</p>
          </div>
        <div className={stylesDetail.carousel}>
     <Carousel fade>
       <Carousel.Item>
       <img
         className="d-block w-100"
        src={detail.album}
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
{/*            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

        </p> */}

          <p>{text}</p>

            <button className={stylesDetail.more} onClick={handleClick}>Ver Mas</button>
        </div>

         <h2>We Recommend Also...</h2>
          <div className={stylesDetail.cardOthers}>
 
             <Carousel>
            <Carousel.Item>
                 <CardOthersServices></CardOthersServices>
                 
             </Carousel.Item>

             <Carousel.Item>
                 <CardOthersServices></CardOthersServices>
             </Carousel.Item>

             <Carousel.Item>
                 <CardOthersServices></CardOthersServices>
             </Carousel.Item>

             <Carousel.Item>
                 <CardOthersServices></CardOthersServices>
             </Carousel.Item>


            </Carousel>

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