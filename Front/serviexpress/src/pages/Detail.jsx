
import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';
import CardSellerDetail from '../components/CardSellerDetail';
import CardOthersServices from '../components/CardOthersServices';
import ProfileOpinion from '../components/ProfileOpinion';
import Footer from '../components/FooterDetail';
import NavBar from '../components/NavBar/NavBar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import ServicesBar from '../components/ServicesBar';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {getById} from '../redux/action.js';
import { useParams } from 'react-router-dom';

export default function Detail(){
    const {id} = useParams();

    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);

  
  


    useEffect(() => {
        dispatch(getById(id));

    },[dispatch,id]);


  const [text,setText] = useState();



    const handleClick = (e) => {
        e.preventDefault();
        setText(detail.detail);

    };

    
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
                <p>{detail.title}</p>

                  <div>
                <label>Publicado el: </label>
               <p > {detail.date}</p>
               </div>
          </div>


        <div className={stylesDetail.carousel}>
     <Carousel fade>
        {detail.album.map(e => {
            return <Carousel.Item>
            <img className="d-block w-100" src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
       <div className={stylesDetail.price}><p>Price: </p>
       <div> ${detail.price} </div>
       
       </div>


    </div>

        <div className={stylesDetail.about}>
        <h3>About Services</h3>
{/*            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

        </p> */}

          <p>{detail.detail_resume}</p>
          <p></p>
          <p>{text}</p>

            <button className={stylesDetail.more} onClick={handleClick}>Ver Mas</button>
        </div>

         <h2>We Recommend Also...</h2>
          <div className={stylesDetail.cardOthers}>
 
             <Carousel>
            <Carousel.Item>
                 <CardOthersServices id="0"></CardOthersServices>
                 
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
          <ProfileOpinion userid={detail.userId}></ProfileOpinion>

        </div>
       
    </div>
    <CardSellerDetail userid={detail.userId}></CardSellerDetail>

    </div>
     <Footer></Footer>
    </div>

};