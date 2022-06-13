import { styled } from '@mui/material/styles';
import styles from '../pages/styles/ContactCard.module.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Input = styled('input')({
  display: 'none',
});



export default function ContactCard({name,perfil}){

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
         
          <textarea type="text" placeholder='I need a service like...'></textarea>
          

          <div className={styles.imgButton}>
          <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera sx={{ fontSize: 24  }}/>
        </IconButton>
         </label>
        </div>

          <label>Do you need this service urgently?</label>

          <div className={styles.btns}>
          <Button color="primary" sx={{ fontSize: 12  }} >No, I dont</Button>
          <Button color="primary" sx={{ fontSize: 12  }} >Yes, it's Urgent!</Button>


          
          </div>
      
        <Button variant="contained" endIcon={<SendIcon />}  sx={{ fontSize: 16  }}>
             Send
        </Button>
    </div>


};