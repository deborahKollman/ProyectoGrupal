import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsStar, BsTypeH2 } from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import StylesCardEdit from "./CardPublicationedit.module.scss";


const CardPublications = ({ id, summary, album, title, price }) => {
  const score=3
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
    <div className={StylesCardEdit.comp_card_publication}>
      <div className={StylesCardEdit.card}>
       

        
          <div className={StylesCardEdit.cardimage}>
          
            <div>
             <Carousel fade>
               {album.map(e => {
                return <Carousel.Item>
                <img  src={e} alt="First slide"
                   />
            </Carousel.Item>
       })}

    </Carousel>
    
          </div>
          </div>
          
          <div className={StylesCardEdit.cardtext}>
          <div className={StylesCardEdit.titlec}>
            <div className={StylesCardEdit.divtitlee}>
            <h6 className={StylesCardEdit.titlec}>{title}</h6> 
            </div>
            <div>
            <Link to={`/DetailEdit`}>
            <p className={StylesCardEdit.editt}> (edit publication)✏️</p>
            </Link>
            </div>
            </div>
            <p className={StylesCardEdit.titlesummary}>{summary}</p>
            <div className={StylesCardEdit.cardstats}>
                    <div className={StylesCardEdit.stat}>
                        {scoreStar.map(e => <BsStarFill/>)}
                        {scoreStarTotal.map(e => <BsStar/>)}
                                              
                    </div>
                </div>
            <div className={StylesCardEdit.UL}>
            <div className={StylesCardEdit.pricebox}>
            <p className={StylesCardEdit.titleprice}>Starting at : USD {price} </p>
            </div>
            <div>
              <p className={StylesCardEdit.delete}>❌</p>
            </div>
           
           </div>
          </div>

          <div className={StylesCardEdit.cardstats}></div>
        
      </div>
    </div>
  );
};

export default CardPublications;  