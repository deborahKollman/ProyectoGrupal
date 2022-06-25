import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getChat} from '../../redux/action'


export default function Chat({id}){

    const dispatch = useDispatch();
    const chat = useSelector(state => state.chat);


    useEffect(() => {


        dispatch(getChat(id));


    },[dispatch,id])
    

    return <div>
      <Paper sx={{width: 700}}>

       
        {chat && chat.map(e =>  e.chats.map(element => <List>
          <ListItem button>
            <ListItemText primary={element.comment} />
            </ListItem>
               <Divider />
            </List>

           )

         )

        }
        
        


     
   </Paper>
    </div>

};