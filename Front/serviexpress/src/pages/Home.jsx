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
                
            <div className="divpag">
            
            <ServicesBar>
                
            </ServicesBar>
                    
                        <Pagination className ="pagination"
                            PublicationsPerPag={PublicationsPerPage}
                            allPublications={allPublications.length}
                            pagination = {pagination}
                            
                        />
                    </div>

                <div className='services-home'>
                { SwichL===true || allPublications.length===0 ? (
					
                    <Loading></Loading>
						
						
					
                    ) : (currentServices.map( e => {
                    
                    return(
                    <div>
                        <CardPublications  
                            id={e.id}
                            album={e.album} 
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
