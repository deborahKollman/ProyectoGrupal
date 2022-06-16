import React from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import "./CardPublications.scss";
import Carousel from 'react-bootstrap/Carousel';





const CardPublications = ({ id, score, summary, album, title, price }) => {
  return (
    <div className="comp_card_publication">
      <div className="card">
       

        <Link className="link" to={`/detail/${id}`}>
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
            <p className="titlestar">⭐⭐⭐⭐⭐(5)</p>
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