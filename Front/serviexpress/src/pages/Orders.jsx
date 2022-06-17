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
import swal from "sweetalert"
import tres from '../media/tres.jpg'

const Orders = () => {

  const navigate = useNavigate()

  function clearOrder() {
    let myLocalStorage = []
    localStorage.setItem("service", JSON.stringify(myLocalStorage))
    navigate('/prueba')
  }

  function handleCancel() {
    swal({
      title: "Do you want to cancel your service?",
      //text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['No', 'Yes'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your service has been deleted", {
          icon: "success",
        });
        clearOrder()
      } 
    })
  } 

  return (
    <div className={Styles.container}>
      <BurgerButton/>   

     {/* {localStorage.service.length? */}
     
      <div className={Styles.orders}>   

        <Card sx={{ maxWidth: 800, maxHeight: 450, display: 'flex'}}>
        <CardMedia
          component="img"
          width="100"
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
             <Button onClick={() => navigate('/payment')} size="medium">Continue</Button>
             <Button onClick={handleCancel} size="medium">Cancel</Button>
           </CardActions>
        </div>
        </Card>
    </div> 
      
     : 
       {/* <div className={Styles.emptycart}>
        <h1>Your order list is empty!</h1>
        <Button
          variant="text"
          onClick={() => navigate("/home")}
          sx={{
            color: "black",
            fontSize: 14,
          }}
        >
          Return home
        </Button>
          <img className={Styles.emptyicon} src='https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/order-512.png' width={250} />
        </div> */}


  <FooterBar/>
    </div>
  )
}

export default Orders