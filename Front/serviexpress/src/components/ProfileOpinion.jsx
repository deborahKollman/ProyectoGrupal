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

    return <div>
        {user.seller_opinions.map(e => {
            return (
                <div className={style.container}>
                {/* <img className={style.profile} src={e.buyer_avatar} alt="profile"></img> */}
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