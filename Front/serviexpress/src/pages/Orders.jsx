import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import { Stack } from '@mui/material';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/Orders.module.scss'


const Orders = () => {

  function handleDelete() {}

  function handleSubmit(e) {
    e.preventDefault();

  }
  return (
    <div className={Styles.container}>
      <BurgerButton/>
    
      <form onSubmit={(e) => handleSubmit(e)}>
       <div className={Styles.orders}>


        <div className={Styles.checkout}>
          <h3>SHOPPING CART</h3>
        </div>
        
        <div className={Styles.buttons}>

          <Stack spacing={2}>
            <Button type='submit' variant="contained" color="success">Continue</Button>
            <Button onClick={() => handleDelete()} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
          </Stack>
        </div>

      
        </div>
      </form>
      <FooterBar/>
    </div>
  )
}

export default Orders