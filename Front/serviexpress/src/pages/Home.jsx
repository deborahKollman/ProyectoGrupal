import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getServices, swich_loading} from "../redux/action"
import {Link} from 'react-router-dom';
import Card from "../pages/components/Card/Card"
import PaginationRounded from "../components/Pagination/Pagination";
import Loading from '../pages/components/Loading/Loading';
import NavBar from '../components/NavBar/NavBar'
import ServicesBar from "../components/ServicesBar";
import './Home.css';

export default function Home(){
    const dispatch = useDispatch();
    const allServices = useSelector ((state)=>state.services);
    const SwichL = useSelector ((state)=>state.switchloading)
    const [CurrentPage, setCurrentPage] = useState(1);
    const [ServicesPerPage, setRecipesPerPage] = useState(16);
    const indexOfLastService = (CurrentPage * ServicesPerPage);
    const indexOfFirstService = (indexOfLastService - ServicesPerPage);
    const currentServices = allServices.slice(indexOfFirstService,indexOfLastService);
    // const [order,setorder] = useState ("")
    // const [orderscore , setorderscore] = useState(1)
    const servicescreate = [];
    const pagination = (pageNumber) => {setCurrentPage(pageNumber)}
     
        useEffect(() => {
            dispatch(getServices())
        }, [dispatch]);

        useEffect(()=>{
            setCurrentPage((pag)=> pag = 1)
        }, [allServices])


if(allServices.length===0)dispatch(swich_loading(true))
else if(allServices.length!==0)dispatch(swich_loading(false))



        return(
            <div className="wphome">
            <NavBar>
                
            </NavBar>
                
            <div className="divpag">
            <ServicesBar>
                
            </ServicesBar>
                    
                        <PaginationRounded className ="pagination"
                            ServicesPerPag={ServicesPerPage}
                            allServices={allServices.length}
                            pagination = {pagination}
                            
                        />
                    </div>

                <div className='services-home'>
                { SwichL===true ? (
					<div className="loadd">
                    
						<Loading>
                        <h2 className="h2loading">Loading...</h2>
                        </Loading>
						
					</div>
                    ) : (currentServices.map( e => {
                    
                    return(
                    <div>
                        <Card   
                            id={e.id}
                            album={e.album} 
                            title={e.title} 
                            summary={e.detail_resume}
                            score={e.score} 
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










          {/* <select onChange={e=>  filterforCategory(e)}>
                            <option key = 'All' value='All'>All categories</option>
                            <option key = 'plumbing' value='plumbing'>plumbing</option>
                            <option key = 'electricity' value='electricity'>electricity</option>
                            <option key = 'carpentry' value='carpentry'>carpentry</option>
                            <option key = 'developers' value='developers'>developers</option>
                            <option key = 'graphic & design' value='graphic & design'>graphic & design</option>
                            <option key = 'advocacy' value='advocacy'>advocacy</option>
                            <option key = 'engineering' value='engineering'>engineering</option>
                            <option key = 'technical service' value='technical service'>technical service</option>
                            <option key = 'digital marketing' value='digital marketing'>digital marketing</option>
                            <option key = 'music & audio' value='music & audio'>music & audio</option>
                        </select> */}




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
        // }