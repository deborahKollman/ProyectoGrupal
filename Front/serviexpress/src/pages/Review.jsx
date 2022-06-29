import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/Review.module.scss'

const Review = () => {
  return (
    <div className={Styles.container} >
        <BurgerButton />
        <FooterBar />
    </div>
  )
}

export default Review