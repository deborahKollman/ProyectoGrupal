import cardStyle from '../pages/styles/cardOthersServices.module.scss'
import Opinion from './Opinion'
import { useEffect, useState } from 'react';
import {getUsers} from '../redux/action.js';
import { useDispatch,useSelector } from 'react-redux';



export default function CardOthersServices({id}){

    const dispatch = useDispatch();
    const users = useSelector(state =>  state.users);


    useEffect(() => {
        dispatch(getUsers());


    },[dispatch]);

    console.log(users[0]);


    return <div className={cardStyle.container}>
        
        
        <p>"Cumplido"</p>
        <p>"Responsable"</p>
        <p>"Buen Precio"</p>
        <Opinion></Opinion>
      </div>


};