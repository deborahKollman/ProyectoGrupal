import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import "./CardPublications.scss";
import { BsStarFill, BsStar } from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";



const CardPublications = ({ id, summary, album, title, price, userId }) => {
const dispatch = useDispatch()

const users = useSelector((state) => state.users);
const user = users.find((u)=>u.id===userId)

const score = user.seller_reputation
const scoreStar = [];
const scoreStarTotal = [];
const totalStar = 5-score;
  for (let i = 0; i < score; i++) {
    scoreStar.push(i);
  };
  for (let i = 0; i < totalStar; i++) {
    scoreStarTotal.push(i);
  };
  return (
    <div className="comp_card_publication">
      <div className="card">
       

        <Link className="link" to={`/Detail/${id}`}>
          <div className="card-image">
          
            <div>
             <Carousel fade>
               {album.map(e => {
                return <Carousel.Item>
                <img className="d-block w-100" src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
    
          </div>
          </div>
          </Link>
          <div className="card-text">
            <h6 className="titlec">{title}</h6>
            <p className="titlesummary">{summary}</p>
            <div className='card-stats'>
                    <div className='stat'>
                        {scoreStar.map(e => <BsStarFill/>)}
                        {scoreStarTotal.map(e => <BsStar/>)}
                                              
                    </div>
                </div>
            <div className="UL">
            <div className="pricebox">
            <p className="titleprice">Starting at : USD {price} </p>
            </div>
            <div className="like">
            <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite />} />
            </div>
           </div>
          </div>

          <div className="card-stats"></div>
        
      </div>
    </div>
  );
};

export default CardPublications;