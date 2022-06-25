import { styled } from '@mui/material/styles';
import styles from '../pages/styles/ContactCard.module.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUser,sendBudget,postChat} from '../redux/action'


const Input = styled('input')({
  display: 'none',
});



export default function ContactCard({name,perfil,id_seller}){
    const {id} = useParams();
  
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);



    const [text, setText] = useState({
      publicationId: id,
      user_request: user.id,
      comment_request: "",
      picture_request: [],
      priority: ""


    });

      useEffect(() => {
          dispatch(getUser());



      },[dispatch])




     const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(sendBudget(text.publicationId,text.user_request,id_seller,text.comment_request,text.picture_request,text.priority));
        
        dispatch(postChat(2,text.comment_request,user.id,27));

    };




    const handleChange = (e) => {
        setText({...text, comment_request: e.target.value})

    };

    const handleFile = (e) =>{
     
        const reader = new FileReader();
          
        reader.onload = () => {
         
            // setImg({photo: reader.result});

            setText({...text,picture_request : [reader.result]})
          
        };
      
        reader.readAsDataURL(e.target.files[0]);
          
      
    };
 
    const handlePriority = (e) => {
        setText({...text,priority: e.target.name});


    };
  
   


    return <div className={styles.container}>
          <div className={styles.userCenter}>
          <div className={styles.user}>
            <img src={perfil} alt="perfil"></img>
            <label>{name}</label>
          </div>
          </div>

          <div className={styles.imgButton}>
          <IconButton color="success" component="button" >
          <WhatsAppIcon sx={{ fontSize: 30  }}/>
        </IconButton>
        </div>




          <label>Write a service that you looking for:</label>
         
          <textarea type="text" placeholder='I need a service like...' value={text.comment_request} onChange={handleChange}></textarea>
          

          <div className={styles.imgButton}>
          <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={handleFile}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera sx={{ fontSize: 24  }}/>
        </IconButton>
         </label>
        </div>

          <label>Do you need this service urgently?</label>

          <div className={styles.btns}>
          <Button color="primary" sx={{ fontSize: 12  }} name='normal'  onClick={handlePriority}>No, I dont</Button>
          <Button color="primary" sx={{ fontSize: 12  }} name='urgent' onClick={handlePriority} >Yes, it's Urgent!</Button>


          
          </div>
      
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}  sx={{ fontSize: 16  }}>
             Send
        </Button>
    </div>


};