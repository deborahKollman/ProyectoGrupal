import React from "react";
import { Link } from "react-router-dom";

import "./CardPublications.scss";

const CardPublications = ({ id, score, summary, album, title, price }) => {
  return (
    <div className="comp_card_publication">
      <div className="card">
        {/* <p className='butonX'>{buttonx()}</p>        */}

        <Link className="link" to={`/detail/${id}`}>
          <div className="card-image">
            <img src={album} alt="not found" />
          </div>

          <div className="card-text">
            <h6 className="titlec">{title}</h6>
            <p className="titlesummary">{summary}</p>
            <p className="titlestar">⭐⭐⭐⭐⭐(5)</p>
            <p className="titleprice">Starting at : USD {price} </p>
          </div>

          <div className="card-stats"></div>
        </Link>
      </div>
    </div>
  );
};

export default CardPublications;
