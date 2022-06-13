import React from "react";
import { Link } from "react-router-dom";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import "./CardPublications.scss";

const CardPublications = ({ id, score, summary, album, title, price }) => {
  return (
    <div className="comp_card_publication">
      <div className="card">
        {/* <p className='butonX'>{buttonx()}</p>        */}

        
          <div className="card-image">
          <Link className="link" to={`/detail/${id}`}>
            <img src={album} alt="not found" />
            </Link>
          </div>

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
