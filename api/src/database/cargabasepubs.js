
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
            "userId": 2,
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
                        
                        //New
                        pub=await Publication.create( {
                            "date": "8/10/2021",
                            "state":"Active",
                            "title":"Soporte tecnico",
                            "album":["https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/7709110/pexels-photo-7709110.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Soporte tecnico de PC, asesorias, atencion a domicilio o remoto.",
                            "detail_resume": "Soporte tecnico, asesorias",
                            "price": 2000,
                            "userId": 6,
                            "categoryId":7,
                            "services": [43]})

                        pub=await Publication.create( {
                            "date": "11/11/2019",
                            "state":"Active",
                            "title":"Reparacion de celulares",
                            "album":["https://images.pexels.com/photos/719399/pexels-photo-719399.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Reparacion de telefonos celulares y tablets,consultas y presupuestos sin cargo, liberacion de linea.",
                            "detail_resume": "Reparacion de telefonos celulares y tablets",
                            "price": 1000,
                            "userId": 4,
                            "categoryId":7,
                            "services": [45]})

                        pub=await Publication.create( {
                            "date": "11/11/2019",
                            "state":"Active",
                            "title":"Reparacion de computadoras",
                            "album":["https://images.pexels.com/photos/4705636/pexels-photo-4705636.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/4705608/pexels-photo-4705608.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Reparacion de desktop, notebook, netbook, consultas y presupuestos sin cargo, mejoras de equipo.",
                            "detail_resume": "Reparacion de computadoras",
                            "price": 1000,
                            "userId": 4,
                            "categoryId":7,
                            "services": [43]})

                        pub=await Publication.create( {
                            "date": "05/08/2018",
                            "state":"Active",
                            "title":"Fotografia profesional",
                            "album":["https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://media.istockphoto.com/photos/shooting-a-wedding-with-a-vintage-camera-picture-id621711304?k=20&m=621711304&s=612x612&w=0&h=4dYYopaiduSYu43V5n7cMn6T1KYp7AWvYit4FKOT7xk=",
                            "https://images.pexels.com/photos/326316/pexels-photo-326316.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Fotografia profesional para bodas, nacimientos, cumpleaños, eventos especiales, sesiones de fotografia, presupuestos sin cargo.",
                            "detail_resume": "Fotografia para eventos",
                            "price": 2500,
                            "userId": 5,
                            "categoryId":11,
                            "services": [71]})

                        pub=await Publication.create( {
                            "date": "05/02/2020",
                            "state":"Active",
                            "title":"Clases particulares",
                            "album":["https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Clases particulares de matematicas, fisica y quimica, para alumnos de primaria y secundaria, impartidas por un profesional de la educacion matriculado, modalidad presencial y virtual.",
                            "detail_resume": "Clases particulares de matematicas",
                            "price": 700,
                            "userId": 10,
                            "categoryId":3,
                            "services": [16]})

                        pub=await Publication.create( {
                            "date": "8/10/2021",
                            "state":"Active",
                            "title":"Desarrollo de sistemas",
                            "album":["https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Desarrollo full stack de sistemas, soporte continuo, presupuestos, atencion a individuos y empresas.",
                            "detail_resume": "Desarrollo y soporte de sistemas",
                            "price": 10000,
                            "userId": 6,
                            "categoryId":7,
                            "services": [44]})

                        pub=await Publication.create( {
                            "date": "4/10/2020",
                            "state":"Active",
                            "title":"Manicuria y Pedicuria",
                            "album":["https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/7755549/pexels-photo-7755549.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/2624853/pexels-photo-2624853.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Me dedico a manicuria y pedicuria, recupera la belleza de tus manos y pies, lucí unas uñas espectaculares a un precio razonable.",
                            "detail_resume": "Manicuria y pedicuria profesional",
                            "price": 2000,
                            "userId": 9,
                            "categoryId":2,
                            "services": [11,12]})

                        pub=await Publication.create( {
                            "date": "05/08/2019",
                            "state":"Active",
                            "title":"Catering",
                            "album":["https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg?auto=compress&cs=tinysrgb&w=600"],
                            "detail":"Servicio de catering para bodas, bautismos, cumpleaños, eventos especiales. Grupo profesional para asegurarse de que tu evento sea perfecto. Precio por 100 invitados.",
                            "detail_resume": "Servicio de catering para eventos",
                            "price": 5000,
                            "userId": 5,
                            "categoryId":5,
                            "services": [31]})

                            pub=await Publication.create( {
                                "date": "4/15/2019",
                                "state":"Active",
                                "title":"Idiomas",
                                "album":["https://image.shutterstock.com/image-photo/cheerful-woman-teaching-english-class-600w-141309880.jpg",
                                "https://image.shutterstock.com/image-photo/elder-600w-472286809.jpg",
                                "https://image.shutterstock.com/image-photo/hand-writing-on-blackboard-language-600w-477810547.jpg"],
                                "detail":"Aprendizaje y apoyo a la medida de las necesidades del alumno.Preparación para exámenes nacionales e internacionales PET, FCE, etc.Amplia disponibilidad horaria.",
                                "detail_resume": "Aprenda Inglés y Alemán",
                                "price": 6200,
                                "userId": 4,
                                "categoryId":3,
                                "services": [1]})
                                
                                pub=await Publication.create( {
                                "date": "5/17/2020",
                                "state":"Active",
                                "title":"Soporte escolar",
                                "album":["https://image.shutterstock.com/image-photo/smiling-female-lecturer-helping-student-600w-1145576060.jpg",
                                "https://image.shutterstock.com/image-photo/african-american-teacher-schoolgirl-wearing-600w-1798363273.jpg",
                                "https://image.shutterstock.com/image-photo/online-education-children-girl-schoolgirl-600w-1723955134.jpg"],
                                "detail":"ALUMNOS: PRIMARIO-SECUNDARIO-CBC-INGRESO UTN -TERCIARIO-UNIVERSITARIO.LAS CLASES PUEDEN SER VIRTUALES Y/O PRESENCIALES.Las virtuales se dictan a través de la aplicación meet, compartiendo la pantalla de una pizarra virtual.",
                                "detail_resume": "Ayuda escolar primaria y secundaria",
                                "price": 9400,
                                "userId": 2,
                                "categoryId":3,
                                "services": [2]})
                                
                                pub=await Publication.create( {
                                "date": "2/23/2019",
                                "state":"Active",
                                "title":"Computación",
                                "album":["https://image.shutterstock.com/image-photo/elementary-school-computer-science-classroom-600w-1787093735.jpg",
                                "https://image.shutterstock.com/image-photo/lecture-computer-class-600w-210341884.jpg",
                                "https://image.shutterstock.com/image-photo/school-kids-using-computer-classroom-600w-575481358.jpg"],
                                "detail":"Clases online por Zoom para sacarse dudas, para hacer ejercicios, para ayudar a entender cómo resolver esos problemas mediante la programación orientada a objetos o con C. Puedo ayudarte a introducirte en el mundo de la programación o a enseñarte de 0 (cero) cualquier lenguaje.",
                                "detail_resume": "Clases de computacion-Nivel inicial e intermedio",
                                "price": 1500,
                                "userId": 5,
                                "categoryId":3,
                                "services": [2]})
                                
                                pub=await Publication.create( {
                                "date": "2/2/2018",
                                "state":"Active",
                                "title":"Canto y baile",
                                "album":["https://image.shutterstock.com/image-photo/caucasian-beautiful-woman-teacher-doing-600w-2157130025.jpg",
                                "https://image.shutterstock.com/image-photo/group-children-teacher-music-class-600w-2145520107.jpg",
                                "https://image.shutterstock.com/image-photo/cheerful-active-teenage-black-girl-600w-2162547227.jpg"],
                                "detail":"Relajación, respiración, técnica vocal y repertorio según tus gustos.Encontra tu propia voz.",
                                "detail_resume": "Clases De Canto Online Y Presencial",
                                "price": 11600,
                                "userId": 1,
                                "categoryId":3,
                                "services": [1]})
                                
                                pub=await Publication.create( {
                                "date": "2/3/2021",
                                "state":"Active",
                                "title":"Manejo",
                                "album":["https://image.shutterstock.com/image-photo/driver-courses-people-concept-car-600w-1516100510.jpg",
                                "https://image.shutterstock.com/image-photo/student-driver-taking-driving-test-600w-364523669.jpg",
                                "https://image.shutterstock.com/image-photo/handsome-senior-driving-instructor-writing-600w-364520978.jpg"],
                                "detail":"*Alquiler de motos para rendir. Consulta presupuesto!*Entrenamiento para el examen practico A21,A22,A3 todas las categorías. *Te acompañamos a rendir.*Servicio de practica con moto propia. (retiro de vehículo por su domicilio).",
                                "detail_resume": "Manejo (practicas- Entrenamiento-alquiler)",
                                "price": 1500,
                                "userId": 2,
                                "categoryId":3,
                                "services": [2]})
                                
                                pub=await Publication.create( {
                                "date": "6/2/2021",
                                "state":"Active",
                                "title":"Cocina",
                                "album":["https://image.shutterstock.com/image-photo/male-chef-group-people-cooking-600w-633405473.jpg",
                                "https://image.shutterstock.com/image-photo/students-teacher-pastry-training-course-600w-145280539.jpg",
                                "https://image.shutterstock.com/image-photo/two-positive-women-chefs-cooking-600w-585513890.jpg"],
                                "detail":"Les presento mí nuevo taller on line! Se podrá ver :Muffins Lemon Pie;Crema Lemon Pie;Relleno apto;Cómo rellenarlo;Muffins de manzana con strudel;Distintos tipos de budines : Marmolado;Limón;Frutas secas ; pasas;Cubiertas: Ganache de chocolate;Glaseados;Merengue apto;Decoración;El por por qué y para de la pastelería;Que aporta la manteca el aceite o los diferentes tipos de ;Azúcares.Desde la comodidad de tu casa",
                                "detail_resume": "Curso De Pastelería",
                                "price": 4900,
                                "userId": 1,
                                "categoryId":3,
                                "services": [2]})
                                
                                pub=await Publication.create( {
                                "date": "10/15/2019",
                                "state":"Active",
                                "title":"Instrumentos musicales",
                                "album":["https://image.shutterstock.com/image-photo/focused-girl-playing-acoustic-guitar-600w-1695502747.jpg",
                                "https://image.shutterstock.com/image-photo/lowangle-shot-middle-school-students-600w-1878694351.jpg",
                                "https://image.shutterstock.com/image-photo/focused-boy-playing-acoustic-guitar-600w-1695502726.jpg"],
                                "detail":"Recibido de las carreras Profesorado en Música orientación Guitarra Jazz y la Tecnicatura de instrumento popular orientación Guitarra Jazz. Además, sigo formándome con Leo Tegli (Reconocido guitarrista de la escena de Jazz-Fusión de nuestro país) Profesor recibido en el conservatorio de música Leopoldo Marechal. (Estudio de jazz modal, Jazz-Fusión. Repertorio y recursos de improvisación)",
                                "detail_resume": "Clases de guitarra y violin",
                                "price": 5500,
                                "userId": 2,
                                "categoryId":3,
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
                "categoryId": 1,
                "services": [6]
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
                    "categoryId": 1,
                    "services": [1]
                    }
            )
           /*  const pub4=await Publication.create( 
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
    
  */
        }
        catch (error) {
            console.log(error)
        }
        
    }
    
    module.exports = fxpub;
    