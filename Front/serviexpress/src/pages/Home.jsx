import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPublications, swich_loading} from "../redux/action"
// import {Link} from 'react-router-dom';
import CardPublications from "../components/CardPublications/CardPublications"
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading.js"
import NavBar from '../components/NavBar/NavBar'
import ServicesBar from "../components/ServicesBar";
import './styles/Home.scss';

import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';


// const currentServices = [1,2,3]
// const SwichL= false

export default function Home(){
    const dispatch = useDispatch();
    const allPublications = useSelector ((state)=>state.Publications);
    const SwichL = useSelector ((state)=>state.switchloading)
    console.log(SwichL)
    console.log(allPublications)
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PublicationsPerPage, setPublicationsPerPage] = useState(6);
    const indexOfLastPublication = (CurrentPage *PublicationsPerPage);
    const indexOfFirstPublication = (indexOfLastPublication - PublicationsPerPage);
    const currentServices = allPublications.slice(indexOfFirstPublication,indexOfLastPublication);
    // const [order,setorder] = useState ("")
    // const [orderscore , setorderscore] = useState(1)
    // const servicescreate = [];
    const pagination = (pageNumber) => {setCurrentPage(pageNumber)}
    
        useEffect(() => {
           
            setTimeout(() => {
				dispatch(getPublications());
			}, 3000);
        }, [dispatch]);

        useEffect(()=>{
            setCurrentPage((pag)=> pag = 1)
        }, [allPublications])


// if(allPublications.length===0)dispatch(swich_loading(true))
// else if(allPublications.length!==0)dispatch(swich_loading(false))



        return(
            <div className="wphome">

            <NavBar>
                
            </NavBar>
            <div className="filterservice">
<p className="filtername">Electrican</p>
<p className="filtername">Plumb</p>
<p className="filtername">Programming & Tech</p>
<p className="filtername">Painter</p>
<p className="filtername">Digital-Marketing</p>
<p className="filtername">More...</p>

</div>
                

                    {/* <div className="divcarousel">
     <Carousel fade>
       <Carousel.Item>
       <img
         className="d-block w-100"
        src="https://www.ipsantotomas.cl/wp-content/uploads/sites/27/2016/02/analista-programador.jpg"
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
      src="https://conceptodefinicion.de/wp-content/uploads/2020/11/Diseno-grafico.jpg"
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

    </div> */}

                <div className='services-home'>
  

            
                
                { SwichL===true || allPublications.length===0 ? (
					
                    <Loading></Loading>
						
						
					
                    ) : (currentServices.map( e => {
                    
                    return(
                    <div>
                        <CardPublications  
                            id={e.id}
                            album = "https://image.jimcdn.com/app/cms/image/transf/none/path/sb00e8250327cd0a1/image/i4a413653d6352fc2/version/1604231609/funciones-de-un-electricista.png"
                            title={e.title} 
                            summary={e.detail_resume}
                            // score={e.score} 
                            price={e.price}
                            // opinions= {e.opinions}
                            
                        />
                    </div>
                  
                    )}))

                }
            
                </div>
                <div className="pagination">
                <Pagination className ="pagination"
                            allpublicationsnumber={allPublications.length}
                            pagination = {pagination}
                            PublicationsPerPage = {PublicationsPerPage}
                                                    />
                </div>
                <div className="logos">
                
                  
                </div>

            
        
        </div>
    )

}


        //   {/* <select onChange={e=>  filterforCategory(e)}>
        //                     <option key = 'All' value='All'>All categories</option>
        //                     <option key = 'plumbing' value='plumbing'>plumbing</option>
        //                     <option key = 'electricity' value='electricity'>electricity</option>
        //                     <option key = 'carpentry' value='carpentry'>carpentry</option>
        //                     <option key = 'developers' value='developers'>developers</option>
        //                     <option key = 'graphic & design' value='graphic & design'>graphic & design</option>
        //                     <option key = 'advocacy' value='advocacy'>advocacy</option>
        //                     <option key = 'engineering' value='engineering'>engineering</option>
        //                     <option key = 'technical service' value='technical service'>technical service</option>
        //                     <option key = 'digital marketing' value='digital marketing'>digital marketing</option>
        //                     <option key = 'music & audio' value='music & audio'>music & audio</option>
        //                 </select> */}




                        // function orderforName(e){
                        //     if(e.target.value === 'default'){
                        //         dispatch(getServices())
                        //     } 
                        //     else{
                        //         e.preventDefault();
                        //         dispatch(orderByName(e.target.value))
                        //         setorder(`ordenado ${e.target.value}`)
                        //         setCurrentPage((pag)=> pag = 1)
                        //     }
                        // }



                            // function handleClick(e){
        //     e.preventDefault(); //evita que se recargue y se rompa la pagina
        //     dispatch(getServices())
        // }
    
        // function filterforCategory(e){
        //     if(e.target.value === 'All'){ 
        //         dispatch(getServices())
        //     } 
        //     else{
        //         dispatch(getServicesForCategory(e.target.value))
        //     }
        // }



        // function orderforScore(e){
        //     if(e.target.value === 'default'){
        //         dispatch(getServices())
        //     } 
        //     else {
        //         e.preventDefault();
        //         dispatch(orderByScore(e.target.value))
        //         setorderscore(`ordenadopscore ${e.target.value}`)
        //         setCurrentPage((pag)=> pag = 1)
        //     }
        // }nc.
