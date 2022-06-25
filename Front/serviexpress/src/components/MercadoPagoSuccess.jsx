import { Navigate, useSearchParams, Redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

export default function MercadoPagoSuccess() {
    
    const [params, setParams] = useSearchParams();
    const title = params.get('title') || '';
    const price = params.get('price') || '';
    const payment_id = params.get('payment_id') || '';
    const status = params.get('status') || '';
    const payment_type = params.get('payment_type') || '';
    const merchant_order_id = params.get('merchant_order_id') || '';
    console.log('*******************************')
    
    const save = async function (){
        const data = await axios.post(`/payments/mercado/success`, {payment_id,status,payment_type,merchant_order_id, title, price});
    }
    
    save();

    return (
        <div>
            <Navigate to="/home" replace={true} />
        </div>
     )
};