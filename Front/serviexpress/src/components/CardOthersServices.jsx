import cardStyle from '../pages/styles/cardOthersServices.module.scss'
import {Rating} from '@mui/material';


export default function CardOthersServices({user}){
   


    return <div className={cardStyle.container}>
        <img src={user.avatar_image} alt="perfil"></img>
        <h3>{user.name}</h3>
        {user.buyer_opinions.map(e => <p>"{e.comment}"</p>  )}
        <Rating name="read-only" value={user.buyer_reputation} readOnly/>
      </div>


};