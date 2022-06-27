import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getChat} from '../../redux/action'
import { useParams} from 'react-router-dom';


export default function Chat({id}){
    const {idOrder} = useParams();
    const dispatch = useDispatch();
    const chat = useSelector(state => state.chat);

    useEffect(() => {


        dispatch(getChat(id,idOrder));


    },[dispatch,id,idOrder])

    return <div>
      <Paper sx={{ minWidth: 500}}>

       
        {chat && chat.map(e =>  <List sx={{display: 'flex', justifyItems: 'center'}}>
          <ListItem button alignItems='center'>
          <ListItemText primary={e.date_comment.slice(0,10)} />
            <ListItemText primary={e.comment} />
            </ListItem>
               <Divider />
            </List>

           

         )

        }
   </Paper>
    </div>

};