
import React from "react";
// import { useState, useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {getServices, swich_loading} from "../redux/action"
// import {Link} from 'react-router-dom';
import Card from "../components/CardService/CardService"
// import PaginationRounded from "../components/Pagination/Pagination";
import Loading from '../components/Loading/Loading';
import NavBar from '../components/NavBar/NavBar'
import ServicesBar from "../components/ServicesBar";
// import './Home.css';
const currentServices = [1,2,3]
const SwichL= false


export default function Home(){
    // const dispatch = useDispatch();
    // const allServices = useSelector ((state)=>state.services);
    // const SwichL = useSelector ((state)=>state.switchloading)
    // const [CurrentPage, setCurrentPage] = useState(1);
    // const [ServicesPerPage, setServicesPerPage] = useState(16);
    // const indexOfLastService = (CurrentPage * ServicesPerPage);
    // const indexOfFirstService = (indexOfLastService - ServicesPerPage);
    // const currentServices = allServices.slice(indexOfFirstService,indexOfLastService);
    // // const [order,setorder] = useState ("")
    // const [orderscore , setorderscore] = useState(1)
    // const servicescreate = [];
    // const pagination = (pageNumber) => {setCurrentPage(pageNumber)}
    
        // useEffect(() => {
        //     dispatch(getServices())
        // }, [dispatch]);

        // useEffect(()=>{
        //     setCurrentPage((pag)=> pag = 1)
        // }, [allServices])


// if(allServices.length===0)dispatch(swich_loading(true))
// else if(allServices.length!==0)dispatch(swich_loading(false))



        return(
            <div className="wphome">
           
            <NavBar>
                
            </NavBar>
                
            <div className="divpag">
            <p>holaaaaaaaaaaaaaa</p>
            <ServicesBar>
                
            </ServicesBar>
                    
                        {/* <PaginationRounded className ="pagination"
                            ServicesPerPag={ServicesPerPage}
                            allServices={allServices.length}
                            pagination = {pagination}
                            
                        /> */}
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






 