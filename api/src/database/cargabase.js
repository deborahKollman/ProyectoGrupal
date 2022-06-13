
const { Category, Service, User, Publication } = require('../../src/database/postgres');

const fx = async function() {
    try {
        const juan=await User.create(
            {email:'nnxx@hotmail.com', 
            password: '123456', 
            name: 'Juan', 
            last_name: 'Perez',
            country: 'Peru',
            province_state: 'Lima',
            rol: 'client' ,
            description: "Mecanico de todo tipo de vehiculo, presupuesto sin compromiso, y disponibilidad para ir a domicilio por alguna emergencia",
            avatar_image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3}],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Que buen servicio",rating:5},{commenter:"Mengano Gomez",comment:"Trabajo decente, medio caro",rating:3}],
        })
        const fernando=await User.create(
            {email:'fer@hotmail.com', 
            password: '123456', 
            name: 'Fernando', 
            last_name: 'Fernandez',
            country: 'Argentina',
            province_state: 'Buenos Aires',
            rol: 'client' ,
            description: "Soy electricista matriculado, puedo trabajar en instalaciones indistriales o instalaciones del hogar",
            avatar_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            buyer_reputation: 4,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3}],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Jorge Juarez",comment:"Mal Servicio",rating:1},{commenter:"Jhonatan Perez",comment:"Muy puntual y responsable",rating:5}],
        })
        const damian=await User.create(
            {email:'damian@hotmail.com', 
            password: '123456', 
            name: 'Damian', 
            last_name: 'Dominguez',
            country: 'Uruguay',
            description: "Mas de 20 Años en el rubro de construccion y arquitectura, presentame tu proyecto y yo lo hago realidad.",
            avatar_image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            province_state: 'Montevideo',
            rol: 'client' ,
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3}],
            seller_reputation: 3,
            seller_opinions:[{commenter:"Armando Paredes",comment:"Se desempeño muy bien y termino antes de tiempo",rating:5},{commenter:"Juan Lopez",comment:"Se tardo mucho en terminar",rating:3}],
        })
        const lucas=await User.create(
            {email:'lucas@hotmail.com', 
            password: '123456', 
            name: 'Lucas', 
            last_name: 'Juarez',
            avatar_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            country: 'Colombia',
            description: "Presupuesto sin compromiso",
            province_state: 'Bogota',
            rol: 'client' ,
            buyer_reputation: 3,  
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3}],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Cumplido y bien hecho",rating:5},{commenter:"Fernando Vazquez",comment:"Me gusto su trabajo",rating:4}],
        })



        const asesoramiento=await Service.create({name:'Asesoramiento'})
        const instalaciones=await Service.create({name:'Instalacioes'})
        const soldaduras=await Service.create({name:'Soldaduras'})
        const pinturas=await Service.create({name:'Pinturas'})
        const plomeria=await Category.create({name:'Plomeria'});
        const gas=await Category.create({name:'Gas'});
        const electricidad=await Category.create({name:'Electricidad'});
        plomeria.setServices(asesoramiento);
        plomeria.setServices(instalaciones);
        gas.setServices(instalaciones);
        electricidad.setServices(soldaduras);
        electricidad.setServices(instalaciones);
        electricidad.setServices(pinturas);
        electricidad.setServices(asesoramiento);

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
        const pub2=await Publication.create( 
        {
            "date": "2022-06-09T23:25:33.552Z",
            "state": "Active",
            "title": "Electricista matriculado",
            "album": [
            "http://localhost:3001/public/img/test/2.jpg"
            ],
            "detail": `TECNICO ELECTRICISTA  A DOMICILIO 
            REALIZO LOS SIGUIENTES TRABAJOS:
            • Realización de pozo  a tierra.
            • Cableado y recableado de instalaciones eléctricas.
            • Tomacorrientes, Interruptores.
            • Detección de Cortocircuitos, Fugas de Corriente.
            • Instalación De Alumbrado en general. 
            •  Instalación De Ducha eléctricas.
            •  Instalación de chapas eléctricas
            * Tableros Eléctricos, Llaves Térmicas, Diferenciales.
            • Instalaciones de videoporteros MANO DE OBRA DE CALIDAD CASAS, OFICINAS, DEPARTAMENTOS, LOCALES, GALERIAS. 
            Rodolfo Antón 
            ELECTRICISTA  `,
            "detail_resume": "Estoy matriculado en todo tipo de instalacion",
            "price": 1000,
            "userId": 2,
            "categoryId": 2,
            "services": []
            },
        )
        const pub3=await Publication.create( 
            {
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "Maestro mayor de obras",
                "album": [
                "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1594581835488-0b95b8b0bacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ],
                "userId": 3,
                "categoryId": 3,
                "services": []
                }
        )
    }
    catch (error) {
        console.log(error)
    }
    
}

module.exports = fx;
