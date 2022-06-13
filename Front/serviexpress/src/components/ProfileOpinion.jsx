import style from '../pages/styles/profileOpinion.module.scss';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Rating} from '@mui/material';
import {getUserById} from '../redux/action.js';

export default function ProfileOpinion({userid}){

        const dispatch = useDispatch();
        const user = useSelector(state => state.userId);




    useEffect(() => {
        dispatch(getUserById(userid));

    },[dispatch,userid])


    console.log(user);



    return <div>
        {user.seller_opinions.map(e => {
            return (
                <div className={style.container}>
                <img className={style.profile} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="profile"></img>
        <div>
            <h3>{e.name}</h3>
            <div className={style.divStars}>
                <label>{e.commenter}</label>
              <Rating name="read-only" value={e.rating} readOnly />
            </div>

        </div>
        <p>{e.comment}</p>

            </div>
            )

        })}




    </div>



};