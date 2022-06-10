import { styled } from '@mui/material/styles';
import styles from '../pages/styles/ContactCard.module.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Button} from '@mui/material'


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

          <label>Write a service that you looking for:</label>
         
          <textarea type="text" placeholder='I need a service like...'></textarea>
          

          <div className={styles.imgButton}>
          <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera className={styles.photo} />
        </IconButton>
         </label>
        </div>

          <label>Do you need this service urgently?</label>

          <div className={styles.btns}>
          <button>No, I dont</button>
          <button>Yes, it's Urgent!</button>


          
          </div>
        <Button color='primary' className={styles.btnSend}>Enviar</Button>
    </div>


};