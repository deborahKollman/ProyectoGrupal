/* import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getServices,getServicesForCategory,orderByName, orderByScore, swich_loading} from "../redux/action"
import {Link} from 'react-router-dom';
import Card from "../pages/components/Card/Card"
import Pagination from "../pages/components/Pagination/Pagination";
import Search from "../pages/components/Search/Search";
import Loading from '../pages/components/Loading/Loading';
import './Home.css';

export default function Home(){
    const dispatch = useDispatch();
    const allServices = useSelector ((state)=>state.Services);
    const SwichL = useSelector ((state)=>state.switchloading)
    const [CurrentPage, setCurrentPage] = useState(1);
    const [RecipesPerPage, setRecipesPerPage] = useState(9);
    const indexOfLastService = (CurrentPage * ServicesPerPage);
    const indexOfFirstService = (indexOfLastService - ServicesPerPage);
    const currentServices = allServices.slice(indexOfFirstService,indexOfLastService);
    const [order,setorder] = useState ("")
    const [orderscore , setorderscore] = useState(1)
    const servicescreate = [];
    const pagination = (pageNumber) => {setCurrentPage(pageNumber)}
        
        useEffect(() => {
            dispatch(getRecipes())
            
        }, [dispatch]);

        useEffect(()=>{
            setCurrentPage((pag)=> pag = 1)
           

        }, [allServices])


        if(allServices.length===0)dispatch(swich_loading(true))
        else if(allServices.length!==0)dispatch(swich_loading(false))

        function handleClick(e){
            e.preventDefault(); //evita que se recargue y se rompa la pagina
            dispatch(getServices())
        }
    
        function filterforCategory(e){
            if(e.target.value === 'All'){ 
                dispatch(getServices())
            } 
            else{
                dispatch(getServicesForCategory(e.target.value))
            }
        }

        function orderforName(e){
            if(e.target.value === 'default'){
                dispatch(getServices())
            } 
            else{
                e.preventDefault();
                dispatch(orderByName(e.target.value))
                setorder(`ordenado ${e.target.value}`)
                setCurrentPage((pag)=> pag = 1)
            }
        }

        function orderforScore(e){
            if(e.target.value === 'default'){
                dispatch(getServices())
            } 
            else {
                e.preventDefault();
                dispatch(orderByScore(e.target.value))
                setorderscore(`ordenadopscore ${e.target.value}`)
                setCurrentPage((pag)=> pag = 1)
            }
        }

        return(
            <div className="wphome">
                <div className="upperbar">
                    <div className="divbuttonbar">
                        <Link to='/recipe' className='link'>
                            <button className="buttonhome" >Create Recipe</button>
                        </Link> 
                    </div>
                    <div className="divbuttonbar">
                        <select  onChange={e=> orderforName(e)}>
                            <option key = 'default' value='default'>By name...</option>
                            <option key = 'az' value='az'>A-Z</option>
                            <option key = 'za' value='za'>Z-A</option>
                        </select>
                    </div>
                    <div className="divbuttonbar">
                        <select  onChange={e=> orderforScore(e)}>
                            <option key = 'default' value='default'>By score...</option>
                            <option key = 'best' value='best'>Best Score</option>
                            <option key = 'worst' value='worst'>Worst Score</option>
                        </select>
                    </div>
                    <div className="createornotcreate">
                            <select  onChange={e=> selectcreate(e)}>
                            <option key = 'all' value='all'>all</option>
                            <option key = 'create' value='create'>create</option>
                            <option key = 'api' value='api'>api</option>
                            
                        </select>
                    </div>
                    <h2 className="hometitle">Filter</h2>
                    <div className="divbuttonbar">
                        <select onChange={e=>  filterforCategory(e)}>
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
                        </select>
                    </div>   
                    <div className="divbuttonbar">
                        <button className="buttonhome" onClick={(e)=>{handleClick(e)}}>Default</button>
                    </div>
                    
                    <Search
                        setCurrentPage={setCurrentPage}
                    />   
                </div>
                
                    <div className="divpag">
                    
                        <Pagination className ="pagination"
                            ServicesPerPag={ServicesPerPage}
                            allServices={allServices.length}
                            pagination = {pagination}
                            
                        />
                    </div>
                <div className='recipes-home'>
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
                            image={e.image} 
                            title={e.title} 
                            score={e.score} 
                            summary={e.summary}
                        />
                    </div>
                    
                    )}))

                }
                </div>

            
        
        </div>
    )

}
 */