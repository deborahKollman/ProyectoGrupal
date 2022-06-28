import * as React from 'react';

import Button from '@mui/material/Button';

import { useState } from 'react';
import {Elements , useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import swal from "sweetalert";
import {useDispatch,useSelector} from 'react-redux';
import {getStripe} from '../../redux/action'
import styles from '../styles/PaymentForm.module.scss';
import {useEffect} from 'react';
import {getUser} from '../../redux/action'
import MercadoPago from '../../components/MercadoPago'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51LBNJbA25r7eed2bkcHZIzmLbouFZsUM9b19WawYn5tGP726sLszup0jpaMqFoJxwZ1lwuZxjtlOmTh39hrBsQzk00kZiUQf6V")




export default function PaymentForm() {
  let myOrder = JSON.parse(localStorage.getItem('order'));
  const [show,setShow] = useState();
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const orders = useSelector(state => state.orders);
  
  console.log(orders.map(el => el.id))

  useEffect(() => {
    dispatch(getUser());
  },[dispatch]);


  console.log(myOrder);
  console.log(user);

   const FormCreate = () => {

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    
     const handleSubmit = async (e) => {
      e.preventDefault();
  
     const {error,paymentMethod} =  await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
      });
    
      if(error) {
          
          swal("error", "Error", "error");
      }

/*       else {
          
          const {id} = paymentMethod;
          
          dispatch(getStripe(id,myOrder.price,user.email,user.id,myOrder.id));
          swal("Success", "Service Purchased", "success");
      } */

      else {
        const {id} = paymentMethod;
        swal("Please wait...", "We are waiting for confirmation", "info")

        const { data } = await axios.post("/payments", {
            contractId: orders.map(el => el.id),
            stripeid:id,
            amount:myOrder.price,
            usremail:user.email,
            idBuyer: user.id,
            idPublicacion: myOrder.id
          });
          console.log(orders.id)
          if(data.status === 'succeeded') { 
              swal("Success", "Service Purchased", "success")
              .then((value)=>{
                  navigate("/home", { replace: true })
              })
          }
          else if(data.status === 'rejected') {
              swal("Error", data.id ,"error") 
              .then((value)=>{
                  navigate("/checkout", { replace: true })
              })
          }
      }
    }

    return  <form className={styles.form}>
    <CardElement />
    <Button variant="contained" onClick={handleSubmit} disable={!stripe}>Pay</Button>
    </form>
    

   }





  return (

 


/*     
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
       <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid> 
          

      
 
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
         
        <MercadoPago title={myOrder.title} price={myOrder.price} ></MercadoPago> 

        </Grid> 





       </Grid> 
    </React.Fragment>
  ); */
  <Elements stripe={stripePromise}>
        <span  className={styles.text}> {myOrder.title}  </span>
        <span  className={styles.text}>${myOrder.price}  </span>
        <span  className={styles.text}>   </span>

      <FormCreate></FormCreate>

      <MercadoPago title={myOrder.title} price={myOrder.price} ></MercadoPago> 
      </Elements>

  );
}
