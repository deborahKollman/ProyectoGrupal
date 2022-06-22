import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { BsStarFill, BsStar } from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";
import StylesCard from "./CardPublication.module.scss";


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
    <div className={StylesCard.comp_card_publication}>
      <div className={StylesCard.card}>
       

        <Link  to={`/Detail/${id}`}>
          <div className={StylesCard.cardimage}>
          
            <div>
             <Carousel fade>
               {album.map(e => {
                return <Carousel.Item>
                <img src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
    
          </div>
          </div>
          </Link>
          <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{title}</p>
            <div className={StylesCard.summary}>
            <p className={StylesCard.titlesummary}>{summary}</p>
            </div>
            <div className={StylesCard.cardstats}>
                    <div className={StylesCard.stat}>
                        {scoreStar.map(e => <BsStarFill/>)}
                        {scoreStarTotal.map(e => <BsStar/>)}
                    </div>
                </div>
            <div className={StylesCard.UL}>
            <div className={StylesCard.pricebox}>
            <p className={StylesCard.titleprice}>Starting at : USD {price} </p>
            </div>
            <div className={StylesCard.like}>
            <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite />} />
            </div>
           </div>
          </div>

          <div className={StylesCard.cardstats}></div>
        
      </div>
    </div>
  );
};

export default CardPublications;