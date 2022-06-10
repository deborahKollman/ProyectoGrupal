import React from "react";
import './Pagination.css'



export default function Pagination({ServicesPerPage, allServices, pagination}){
    const pageNumbers = []
    const reset=false
    for(let i=1; i<=Math.ceil(allServices/ServicesPerPage); i++){
        pageNumbers.push(i)
    }
 
    return(
        <div className="pagination2">
                
                    {   
                        
                        pageNumbers && 
                        pageNumbers.map(Number=>{ return(
                            <div className="number" key={Number}>
                            <a onClick={()=>pagination(Number)}>{Number}</a>
                            </div>)
                        })}
                
        </div>
    )
}