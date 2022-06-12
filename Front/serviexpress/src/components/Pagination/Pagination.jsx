import React from "react";
import './Pagination.scss'



export default function Pagination({PublicationsPerPage, allpublicationsnumber, pagination}){
    const pageNumbers = []
    const reset=false
    for(let i=1; i<=Math.ceil(allpublicationsnumber/PublicationsPerPage); i++){
        pageNumbers.push(i)
    }
    
    if(pageNumbers.length>0)
    
    return(
        
        <div className="pagination2">
                
                    {       pageNumbers.map(Number=>{ return(
                            <div className="number" key={Number}>
                            <a onClick={()=>pagination(Number)}>{Number}</a>
                            </div>)
                        })}
                
        </div>
    )
}