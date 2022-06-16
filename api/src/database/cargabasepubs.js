
const { Publication } = require('../../src/database/postgres');

const fxpub = async function() {
    try {
        const pub1=await Publication.create( 
            {
                "date": "2022-06-09T23:25:03.723Z",
                "state": "Active",
                "title": "Mecanico",
                "album": [

                "https://images.unsplash.com/photo-1643701079732-3b1c7a797e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"


                ],
                "detail": `Autoelectrico, mecánica general, Afinaciones, cambio de aciete, fuel injection, escaneo, calibración de cuerpos de aceleración, revisión de compraventa, cambio de bombas de agua y de gasolina, bandas de accesorios y de distribución,
                Servicio a domicilio.
                
                Servicio de auxilio mecánico vial
                
                Lunes a domingo de 8 am a 8pm
                
                Se aceptan tarjetas de crédito y débito.`,
                "detail_resume": "Se hacen trabajos de mecanica en general",
                "price": 5000,
                "userId": 1,
                "categoryId": 1,
                "services": []
                }
        )
 
        }
        catch (error) {
            console.log(error)
        }
        
    }
    
    module.exports = fxpub;
    