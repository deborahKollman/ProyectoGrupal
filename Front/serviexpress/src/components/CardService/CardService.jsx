
import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeartHalf, BsHeart} from 'react-icons/bs'
import {deleteRecipes} from '../../actions/index'
import {useDispatch, useSelector} from "react-redux";

import './Card.css'

const CardServices = ({ id, score,summary, image, title, price}) => {
    
    const dispatch = useDispatch();
    let scoreStar = [];
    let scoreHeart = [];
    let scoreStarTotal = [];
    let scoreHeartTotal = [];
    let totalStar = (10 - Math.floor(score / 10)) - (score % 10 > 0 ? 1 : 0);
    let totalHeart = (10 - Math.floor(healthScore / 10)) - ((healthScore % 10 > 0) ? 1 : 0);
    for (let i = 0; i < Math.floor(score / 10); i++) {
        scoreStar.push(i);
    };
    for (let i = 0; i < Math.floor(healthScore / 10); i++) {
        scoreHeart.push(i);
    };
    for (let i = 0; i < totalStar; i++) {
        scoreStarTotal.push(i);
    };
    for (let i = 0; i < totalHeart; i++) {
        scoreHeartTotal.push(i);
    };

    const getDiets = function () {
		let arrayDiets = [];
		if (diets) {
			for(let diet of diets) {
				typeof diet === 'object' ? arrayDiets.push(diet.title) : arrayDiets.push(diet);
			}
		}
		return arrayDiets.length ? arrayDiets.join(',') : 'not found'
	}

       return (
    <div className='container'>
        
            <div className='card' >
            {/* <p className='butonX'>{buttonx()}</p>        */}
            
            <Link className='link' to={`/detail`}> 
                <div className='card-image'>
                
                <img src={image} alt="not found" />  
                </div> 
                
                <div className='card-text' >
                <h6 className="titlec">{title}</h6>

                <h4 className='card-diets'>{getDiets()}</h4>
                     </div>

                    <div className='card-stats'>
                 
                    <div className="stat2" >
                        {scoreHeart.map(e => <BsHeartFill />)}
                        {(healthScore % 10 > 0) && <BsHeartHalf />}
                        {scoreHeartTotal.map(e => <BsHeart />)}
                        <p className='text-stats'>  Health Score:  {healthScore}</p>
                        <p className='text-stats'>🕐Time: {readyInMinutes} </p>
                     
                    </div>
                   
                    
                </div>
                </Link>
            </div>
       
    </div>
    );
};

export default CardServices;



