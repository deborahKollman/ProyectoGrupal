import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { myLocalStorage } from '../../redux/action';

const ShoppingCart = () => {

    let infoFromLocalStorage = JSON.parse(localStorage.itemCart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clearCart = () => {
        let localS = []
        localStorage.setItem("itemCar", JSON.stringify(localS))
        navigate('/shoppingCar')
        }

  return (
    <div>
        {localStorage.itemCart.lenght > 1 
        ? 
        <div>

        </div>


         : <div></div>
    }

    </div>
  )
}

export default ShoppingCart