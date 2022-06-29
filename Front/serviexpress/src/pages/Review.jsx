import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/Review.module.scss'
import Form from 'react-bootstrap/Form'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'

const Review = () => {
  
  const [rating, setRating] = useState()
  const [hover, setHover] = useState()


  const handleClick = (value) => {
       setRating(value)
  }


  return (
    <div className={Styles.container} >
        <BurgerButton />

        <div className={Styles.form}>
        <h4>Give your review!</h4>
        <Form.Control as="textarea" rows={10} />

        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
          <label>
            <input 
            type='radio'
            name='rating'
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            />
            <FaStar
            className={Styles.star}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            size={50}
            />
          </label>
          )
        })
        }

        <h5>The rating is {rating}</h5>
       
        </div>
        
        <FooterBar />
    </div>
  )
}

export default Review