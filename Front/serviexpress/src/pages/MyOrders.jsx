import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/MyOrder.module.scss'

const MyOrders = () => {
  return (
    <div className={Styles.container}>
        <BurgerButton />
        <h1>MyOrders</h1>



        

        <FooterBar />
    </div>
  )
}

export default MyOrders