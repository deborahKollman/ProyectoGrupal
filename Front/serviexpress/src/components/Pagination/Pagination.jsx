import React from "react";




export default function Paginationnumber({PublicationsPerPage, allPublications}){
    const pageNumbers = []
    const reset=false
    for(let i=1; i<=Math.ceil(allPublications.length/PublicationsPerPage); i++){
        pageNumbers.push(i)
    }
    
    if(pageNumbers.length>0)
    
    return(
        
        pageNumbers.length
        // <div className="pagination2">
                
        //             {       pageNumbers.map(Number=>{ return(
        //                     <div className={Styles.number} key={Number}>
        //                     <a onClick={()=>pagination(Number)}>{Number}</a>
        //                     </div>)
        //                 })}
                
        // </div>
    )
}