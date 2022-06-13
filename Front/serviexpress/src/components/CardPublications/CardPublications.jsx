import React from "react";
import { Link } from "react-router-dom";

import "./CardPublications.scss";

const CardPublications = ({ id, score, summary, album, title, price }) => {
  return (
    <div className="comp_card_publication">
      <div className="card">
        {/* <p className='butonX'>{buttonx()}</p>        */}

        <Link className="link" to={`/detail`}>
          <div className="card-image">
            <img src={album} alt="not found" />
          </div>

          <div className="card-text">
            <h6 className="titlec">{title}</h6>
            <p className="titlec">{summary}</p>
            {/* <p className="titlec">{score}</p> */}
            <p className="titleprice">STARTING AT: US$ {price} </p>
          </div>

          <div className="card-stats"></div>
        </Link>
      </div>
    </div>
  );
};

export default CardPublications;
