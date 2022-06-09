
import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

// import './Card.css'

const CardServices = ({ id, score,summary, album, title, price}) => {
    
    const dispatch = useDispatch();
 

       return (
    <div className='container'>
        
            <div className='card' >
            {/* <p className='butonX'>{buttonx()}</p>        */}
            
            <Link className='link' to={`/detail`}> 
                <div className='card-image'>
                
                <img src={album} alt="not found" />  
                </div> 
                
                <div className='card-text' >
                <h6 className="titlec">{title}</h6>

              
                     </div>

                    <div className='card-stats'>
                 
               
                   
                    
                </div>
                </Link>
            </div>
       
    </div>
    );
};

export default CardServices;



