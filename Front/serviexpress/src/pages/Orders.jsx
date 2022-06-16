import React from 'react'
import { useNavigate } from 'react-router-dom';
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/Orders.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tres from '../media/tres.jpg'

const Orders = ({title}) => {

  const navigate = useNavigate()

  return (
    <div className={Styles.container}>
      <BurgerButton/>   
       
      <div className={Styles.orders}>

       <Card sx={{ maxWidth: 800, maxHeight: 450, display: 'flex'}}>
      <CardMedia
        component="img"
        maxWidth="100"
        image={tres}
        alt="the service you want"
        />
        <div className={Styles.column}>

      <CardContent sx={{maxWidth: 300}}>
        <Typography gutterBottom variant="h5" component="div">
          Service
        </Typography>
        <Typography variant="body1" color="text.secondary">
        I am a creative and inspired architect. My job consists in planning, developing and implementing building designs. 
        I am able to compile feasibility reports, determine environmental impact, create project proposals, estimate costs, 
        determine timelines and oversee construction processes.
        </Typography>

        <Typography>
        ⭐⭐⭐⭐⭐(5)
        </Typography>

        <Typography>
          Price: $USD 5000
        </Typography>

      </CardContent>

      <CardActions className={Styles.buttons}>
        <Button onClick={() => navigate('/checkout')} size="medium">Continue</Button>
        <Button onClick={() => navigate('/home')} size="medium">Cancel</Button>
      </CardActions>

        </div>
        </Card>
        </div> 

      <FooterBar/>
    </div>
  )
}

export default Orders