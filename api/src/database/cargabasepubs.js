
const { Publication } = require('../../src/database/postgres');

const fxpub = async function() {
    try {

         let pub=await Publication.create( {
            "date": "12/17/2020",
            "state":"Active",
            "title":"Colocación de pisos",
            "album":["https://image.shutterstock.com/image-photo/construction-worker-installs-laminate-board-600w-2022060053.jpg",
            "https://image.shutterstock.com/image-photo/asian-builder-worker-people-wear-600w-2006269976.jpg",
            "https://image.shutterstock.com/image-photo/portrait-construction-worker-smile-look-600w-2014017410.jpg"],
            "detail":"COLOCACION ZOCALOS PVC, COLOCADOR PORCELANATO,trabajo particularmente en obras",
            "detail_resume": "Porcelanato Ceramica Obras Revestimiento Escaleras",
            "price": 6300,
            "userId": 9,
            "categoryId":1,
            "services": [1]})
         
            pub=await Publication.create( {
            "date": "4/18/2018",
            "state":"Active",
            "title":"Reparación de techos",
            "album":["https://image.shutterstock.com/image-photo/workers-assemble-suspended-ceiling-drywall-600w-575264734.jpg",
            "https://image.shutterstock.com/image-photo/construction-man-worker-plaster-gypsum-600w-1180654882.jpg",
            "https://image.shutterstock.com/image-photo/grid-pattern-overlay-on-gypsum-600w-1110440585.jpg"],
            "detail":"Más de 25 años ofreciendo nuestros servicios garantizan nuestro compromiso de excelencia y calidad acorde al precio pactado por los trabajos. Además, somos técnicos matriculados para todo el rubro de la construcción e instalaciones, por lo cual brindamos todos los servicios que requieran sus obras.",
            "detail_resume": "Cielo raso - placas - PVC - Machimbres",
            "price": 6300,
            "userId": 8,
            "categoryId":1,
            "services": [2]})
         
            pub=await Publication.create( {
                "date": "6/16/2021",
                "state":"Active",
                "title":"Mejoramiento de exteriores",
                "album":["https://image.shutterstock.com/z/stock-photo-two-painters-are-painting-the-exterior-of-the-building-on-a-dangerous-looking-scaffolding-hanging-1583976994.jpg",
                "https://image.shutterstock.com/image-photo/mason-worker-during-installed-white-600w-1223661049.jpg",
                "https://image.shutterstock.com/image-photo/housekeepers-hand-glove-cleaning-mold-600w-1092215708.jpg"],
                "detail":"✳NUESTROS MUROS SON GUIADOS EN OBRA POR UN PROFESIONAL↘MAESTRO MAYOR DE OBRAS↙ PARA BRINDARLE EL MEJOR SERVICIO A CADA UNO DE NUESTROS CLIENTES QUE NOS ELIJEN.¡¡¡¡COMPRUEBE Y VERA LA GRAN DIFERENCIA EN CALIDAD,SERIEDAD Y COMPROMISO QUE OFRECEMOS.!!!!",
                "detail_resume": "Reparación de exteriores - Muros",
                "price": 5000,
                "userId": 5,
                "categoryId":1,
                "services": [2]})
                

            pub=await Publication.create( {
                "date": "9/8/2021",
                "state":"Active",
                "title":"Revestimiento de cubiertas",
                "album":["https://image.shutterstock.com/image-photo/worker-insulates-walls-house-foam-600w-1814276906.jpg",
                "https://image.shutterstock.com/image-photo/worker-insulates-walls-mineral-wool-600w-2067015032.jpg",
                "https://image.shutterstock.com/image-illustration/acoustic-foam-walls-illuminated-by-600w-1994699744.jpg"],
                "detail":"Asesoría, cotización e instalación de muros acústicos aislantes de sonido, para hogares, industrias y empresas.Visitas técnicas sin cargo para cotización del servicio.El muro acústico es una instalación que se realiza sobre la pared existente con perfilería, membrana acústica y lana de roca, la cantidad de capas dependerá de la cantidad de sonido a aislar.",
                "detail_resume": "Asesoria e Instalacion De Muros Acusticos",
                "price": 9400,
                "userId": 4,
                "categoryId":1,
                "services": [1]})
                
                pub=await Publication.create( {
                    "date": "1/28/2019",
                    "state":"Active",
                    "title":"Plomeria en general",
                    "album":["https://image.shutterstock.com/image-photo/plumber-work-bathroom-plumbing-repair-600w-1066126052.jpg",
                    "https://image.shutterstock.com/image-photo/plumber-work-bathroom-600w-267609398.jpg",
                    "https://image.shutterstock.com/image-photo/high-angle-view-male-plumber-600w-555972427.jpg"],
                    "detail":"¿Quiénes somos?Somos una empresa, certificada por el colegio de matriculados con mas de 60 años de experiencia en el rubro, atendemos consorcios, comercios, industrias, viviendas particulares. estamos respaldados por las marcas mas reconocidas del mercado y los comercios con años de experiencia en el gremio que avalan y recomiendan nuestros servicios. Nos caracterizamos por nuestro profesionalismo, puedes tener confianza de que el trabajo realizado será de una calidad excepcional. Solicita de forma rápida y fácil reparaciones, instalaciones ó servicios de mantenimiento. contamos con la más alta tecnología para que nuestro proceso sea muy sencillo, asi mismo Tu servicio cuenta con garantía para que siempre puedas confiar en nosotros",
                    "detail_resume": "Agenda tu servicio de plomería",
                    "price": 4300,
                    "userId": 2,
                    "categoryId":1,
                    "services": [2]})
                    
                    pub=await Publication.create( {
                    "date": "11/2/2018",
                    "state":"Active",
                    "title":"Tableros electricos",
                    "album":["https://image.shutterstock.com/image-photo/smiling-handsome-electrician-repairing-electrical-600w-1192486423.jpg",
                    "https://image.shutterstock.com/image-photo/male-electrician-works-switchboard-electrical-600w-2063093864.jpg",
                    "https://image.shutterstock.com/image-photo/electricians-hands-testing-switches-electric-600w-748875190.jpg"],
                    "detail":"Revisión / diagnóstico de instalación en general.- Corto circuito. Mantenimiento.- Restablecimiento de energía, cambio de llave térmica, disyuntor, toma o enchufe-llave tecla.- Cableado hasta 30 mts.- Instalación y colocación de luminaria.- Instalación y cambio de dimmer.",
                    "detail_resume": "Electricista matriculado - Master en tableros",
                    "price": 2000,
                    "userId": 3,
                    "categoryId":1,
                    "services": [2]})
                    
                    pub=await Publication.create( {
                    "date": "2/9/2020",
                    "state":"Active",
                    "title":"Vidrios a medida",
                    "album":["https://image.shutterstock.com/image-photo/glazier-cuts-glass-600w-1874218075.jpg",
                    "https://image.shutterstock.com/image-photo/holding-glass-vacuum-lifter-two-600w-780146386.jpg",
                    "https://image.shutterstock.com/image-photo/construction-worker-repairing-window-house-600w-1009394911.jpg"],
                    "detail":"Suministro e instalación de acristalamientos y carpinterías de aluminio. Realizamos obras industriales, comerciales , domiciliarias.etc. visitas y replanteo sin.cargo. Más de 30 años de experiencia.",
                    "detail_resume": "Acristalamientos en obras",
                    "price": 2100,
                    "userId": 8,
                    "categoryId":1,
                    "services": [2]})
                    
                    pub=await Publication.create( {
                        "date": "4/10/2020",
                        "state":"Active",
                        "title":"Masajes y tratamientos",
                        "album":["https://image.shutterstock.com/image-photo/masseur-hands-doing-back-massaje-600w-1372430537.jpg",
                        "https://image.shutterstock.com/image-photo/masseur-hands-doing-back-massaje-600w-1372430534.jpg",
                        "https://image.shutterstock.com/image-photo/masseur-hands-doing-back-massaje-600w-1372430543.jpg"],
                        "detail":"Me dedico a los masajes únicamente de carácter terapéutico, como ser: descontracturantes, sedativos/antiestrés, drenaje linfático manual y reflexología.",
                        "detail_resume": "Masajista profesional matriculada",
                        "price": 8900,
                        "userId": 9,
                        "categoryId":2,
                        "services": [1]})
                        
                        pub=await Publication.create( {
                        "date": "2/10/2018",
                        "state":"Active",
                        "title":"Estética corporal",
                        "album":["https://image.shutterstock.com/image-photo/mature-man-receiving-facial-filler-600w-1394253041.jpg",
                        "https://image.shutterstock.com/image-photo/old-man-visiting-male-doctor-600w-1687470571.jpg",
                        "https://image.shutterstock.com/image-photo/worried-bare-model-having-botox-600w-154036640.jpg"],
                        "detail":"Aplicación de toxina botulinica por médicos especialistas en dermatología y cirugía plástica.En consultorio médico habilitado. Dysport es toxina botulinica de origen británico que a sido elegida por los mejores actores del mundo ya que no genera el aspecto de cara congelada y brinda aspecto de piel humectada.Prevención y tratamiento para las arrugas de expresión ( entre cejo, patas de gallo, arrugas frontales, nasales etc)",
                        "detail_resume": "Aplicación De Botox Toxina Botulinica",
                        "price": 7500,
                        "userId": 1,
                        "categoryId":2,
                        "services": [2]})
                        

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
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
            const pub4=await Publication.create( 
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
            const pub5=await Publication.create( 
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
            const pub6=await Publication.create( 
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
            const pub7=await Publication.create( 
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
            const pub8=await Publication.create( 
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
            const pub9=await Publication.create( 
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
            const pub10=await Publication.create( 
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
    
    module.exports = fxpub;
    