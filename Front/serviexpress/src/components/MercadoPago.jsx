import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMercadoPago} from '../redux/action'

const KEY = "TEST-10a9dd6f-c776-453e-8883-6a445a935c93"

/* const KEY = "TEST-10a9dd6f-c776-453e-8883-6a445a935c93";
const FORM_ID = 'payment-form';


export default  function MercadoPago(){
    const {id} = useParams();

    const dispatch = useDispatch();
    const publication = useSelector(state => state.detail);
    const [keyPreference, setKeyPreference] = useState("245474763-048aafd1-d269-407c-96f9-2f40bacfc463");


    useEffect(() => {   
        dispatch(getById(id));


    },[dispatch,id]);


    useEffect(() => {
         axios.post('/payments/mercado',{
            title: publication.id,
            unit_price: publication.price,
        }).then(e => {
            console.log(e, "useeffect");
           setKeyPreference(e);
        })


        });

    function addCheckout() {

    const mercadopago = new MercadoPago(KEY, {
        locale: "es-AR",
      });
    
      // Inicializa el checkout
         mercadopago.checkout({
        preference: {
          id: "245474763-048aafd1-d269-407c-96f9-2f40bacfc463",
        },
        render: {
          container: FORM_ID, // Indica el nombre de la clase donde se mostrará el botón de pago
          label: "Pagar", // Cambia el texto del botón de pago (opcional)
        },
        autoOpen: true,
      });
    }


        if (keyPreference) {
          // con el preferenceId en mano, inyectamos el script de mercadoPago
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://sdk.mercadopago.com/js/v2';
          console.log("hola");
          script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
          document.body.appendChild(script);
        }

    


  return <div>
             <form id={FORM_ID} method="GET" /> 
            
        </div>



}; */



const FORM_ID = 'payment-form';


export default function MercadoPago({title,price}) {
  const [preferenceId, setPreferenceId] = useState(null);
  const mercado = useSelector(state => state.mercadoPago);
  const dispatch = useDispatch();



  useEffect(() => {
  
   dispatch(getMercadoPago(title,price));

    setPreferenceId(mercado);
    
/*     try {
      
 
    axios.post('http://localhost:3001/payments/mercado', { title: title, price: price}).then((res) => {

    setPreferenceId(res.data);
 
    });

    } catch (error) {
      console.log(error);
    }
 */

  }, [dispatch]);

  useEffect(() => {
    if (preferenceId) {
      const addCheckout = () => {
        const mp = new window.MercadoPago(KEY, {
          locale: 'es-AR'
        });
      
        // Inicializa el checkout
        mp.checkout({
          preference: {
            id: preferenceId,
          },
          render: {
            container: `#${FORM_ID}`, // Indica el nombre de la clase donde se mostrará el botón de pago
            label: 'Buy', // Cambia el texto del botón de pago (opcional)
          },
          
          /* autoOpen: true */
        });
    
       
      }






      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
      document.body.appendChild(script);
    }
  }, [preferenceId]);


  const handleClick = () => {
    
      let dv = document.getElementById("btn");
      dv.setAttribute("id",FORM_ID);
      let cont = document.getElementById('container');
      cont.appendChild(dv);
      console.log(dv);
  };


  return <div id="container">
      <button onClick={handleClick}>BOTON</button>
      <button id="btn" >Pago</button>

    
   </div>
}