import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUser} from '../../redux/action'
import styles from '../styles/ReputationBuyer.module.scss'
import Rating from '@mui/material/Rating';


export default function ReputationSeller(){


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(getUser());

    },[dispatch])

    
    console.log(user);
     return <div className={styles.container}>
            <Stack >
              <div className={styles.head}>
              <Avatar alt="Avatar" src={user.avatar_image}  sx={{ width: 100, height: 100 }}/>
              <Typography gutterBottom variant="h2" component="div">
                {user.name + "  " + user.last_name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            As Buyer..
          </Typography>
            </div>

            <Stack >
            <div className={styles.listOpinions}>
            {user.seller_opinions && user.seller_opinions.map(e => <Card sx={{ width: 300, bgcolor: 'lightgray'}}>

            <CardActionArea>

           <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.commenter}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={14}>
              {e.comment}
          </Typography>

          <Rating name="read-only" value={e.rating} readOnly size='medium' sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} />

            </CardContent>

            

          </CardActionArea>

             </Card>    

                )   }
            </div>
          </Stack>

     </Stack>
  </div>

};
