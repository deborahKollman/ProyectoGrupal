import {Elements , PaymentElement, useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Button, FormControl} from '@mui/material';
import axios from 'axios';
import styles from '../pages/styles/payment.module.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import {useDispatch,useSelector} from 'react-redux';
import {getById} from '../redux/action'



//KEY BETO
//const stripePromise = loadStripe("pk_test_51LBPk1GoLNm66v6I6TssTnj84pvURPEw0RXArNJQlyhp9xzucaT6VN1PMpZaxyTL5LxoOgyxcjE9lNaGH7ajQ0Gl00OcucorEr");


//KEY LEO
const stripePromise = loadStripe("pk_test_51LBNJbA25r7eed2bkcHZIzmLbouFZsUM9b19WawYn5tGP726sLszup0jpaMqFoJxwZ1lwuZxjtlOmTh39hrBsQzk00kZiUQf6V")






const FormCreate = () => {

    const stripe = useStripe();
    const elements = useElements();




const handleSubmit = async (e) => {
    e.preventDefault();

   const {error,paymentMethod} =  await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
    });

    if (error) console.log(error);
    else {
        const {id} = paymentMethod;
        
        const pay = await axios.post("http://localhost:3001/payments",{
            stripeid: id,
            amount: 200,


        })
        console.log(pay);
    }

};


return  <form className={styles.form}>
<CardElement />
<Button variant="contained" onClick={handleSubmit} >Send</Button>
</form>

}

export default function Payment(){
    const {id} = useParams();
 



    const dispatch = useDispatch();
    const publication = useSelector(state => state.detail);



     useEffect(() =>{
       dispatch(getById(id));


    },[dispatch,id])


    console.log(publication);





    return <div className={styles.container}>
    <Elements stripe={stripePromise} >
        <h3>{publication.title}</h3>
        <div className={styles.image}>
        <img src={publication.album[0]} alt="perfil"></img>
        </div>
        <p>{publication.price}</p>
        <div>
            <FormCreate></FormCreate>
        </div>
            

  
    </Elements>
    </div> 
};