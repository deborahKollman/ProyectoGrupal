import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {getMercadoPago} from '../redux/action'
import styles from '../pages/styles/mercadopago.module.scss'

const KEY = "TEST-10a9dd6f-c776-453e-8883-6a445a935c93"



const FORM_ID = 'payment-form';


export default function MercadoPago({title,price,contractId,usremail}) {

  const mercado = useSelector(state => state.mercadoPago);
  const dispatch = useDispatch();



  useEffect(() => {

   dispatch(getMercadoPago(title,price,contractId,usremail));
 

  }, [dispatch]);


      const addCheckout = () => {
    
        const mp = new window.MercadoPago(KEY, {
          locale: 'es-AR'
        });
      
        // Inicializa el checkout
        mp.checkout({
          preference: {
            id: mercado,
          },
          render: {
            container: `#${FORM_ID}`, // Indica el nombre de la clase donde se mostrará el botón de pago
            label: 'MercadoPago', // Cambia el texto del botón de pago (opcional)
          },
          
          /* autoOpen: true */
        });
    
       
      }

    

  const han = () => {
            // con el preferenceId en mano, inyectamos el script de mercadoPago
            const script = document.createElement('script');
      
            script.type = 'text/javascript';
            script.src = 'https://sdk.mercadopago.com/js/v2';
            script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
            script.async = true;
            document.body.appendChild(script);
            document.getElementById("btnCompra").style.display = 'none';

  }


  return <div id={FORM_ID}>
        <button id="btnCompra" className={styles.btn} onClick={han}>MercadoPago</button>
       

  </div> 

}