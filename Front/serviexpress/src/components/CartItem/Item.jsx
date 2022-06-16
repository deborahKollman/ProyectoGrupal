import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { myLocalStorage } from '../../redux/action';

const Item = ({data}) => {
    const {id, title, image, price} = data;
    const dispatch = useDispatch()
  return (
    <div>

    </div>
  )
}

export default Item