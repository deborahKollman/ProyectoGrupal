import {Elements , PaymentElement, useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {Button} from '@mui/material';

const stripePromise = loadStripe("pk_test_51LBPk1GoLNm66v6I6TssTnj84pvURPEw0RXArNJQlyhp9xzucaT6VN1PMpZaxyTL5LxoOgyxcjE9lNaGH7ajQ0Gl00OcucorEr");



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
    else console.log(paymentMethod);

};


return  <form>
<CardElement />
<Button variant="contained" onClick={handleSubmit} >Send</Button>
</form>


}








export default function Payment(){


    return  <Elements stripe={stripePromise}>
            <FormCreate></FormCreate>

  
    </Elements>

};