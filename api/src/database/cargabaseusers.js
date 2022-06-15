
const { User } = require('../../src/database/postgres');

const fxuser = async function() {
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
            buyer_opinions:[{commenter:"Fernando Fernandez",comment:"Muy cumplido",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Carlos Perez",comment:"Bien",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Nicolas Garcia",comment:"No se pudo completar el trabajo por un problema mio",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
  
        ],
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
            avatar_image: "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            buyer_reputation: 4,  
            buyer_opinions:[
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
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
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3, buyer_avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Jorge Flores",comment:"Lo recomiendo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}],
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
            buyer_opinions:[{commenter:"Alicia Sanchez",comment:"Que agradable sujeto",rating:3,buyer_avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Jorge Fernandez",comment:"Actitud negativa y muy caro",rating:2,buyer_avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Alicia Sanchez",comment:"Buen trabajo",rating:4,buyer_avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
            {commenter:"Damian Juarez",comment:"Lo recomiendo muchisimo",rating:5,buyer_avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
        ],
            seller_reputation: 4,
            seller_opinions:[{commenter:"Fulano Perez",comment:"Cumplido y bien hecho",rating:5},{commenter:"Fernando Vazquez",comment:"Me gusto su trabajo",rating:4}],
        })

        let a =await User.create({
            email:'cangur@intercom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'ALENA',
            last_name:'ALEU ICART',
            country:'España',
            province_state:'Barcelona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2016/alena.jpg',
            buyer_reputation:4,
            buyer_opinions:[
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg',
            },
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            },
            {
            commenter:'DANIEL ANDREU CRUZ',
            comment:'',
            rating:4,
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            a =await User.create({
            email:'alien@intercom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'ALMENDRA',
            last_name:'ANGUERA VILAFRANCA',
            country:'España',
            province_state:'Valencia',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            buyer_reputation:4,
            buyer_opinions:[
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            },
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png',
            },
            {
            commenter:'KUYEN BERENGUERAS CULLERÉS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:2,
            },
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:4,
            },
            {
            commenter:'AMANDA PASCUAL ALOY',
            comment:'',
            rating:1,
            }]
            })
            
            
            
            a =await User.create({
            email:'amores@hotmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'AMANDA',
            last_name:'PASCUAL ALOY',
            country:'España',
            province_state:'Girona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
            },
            {
            commenter:'AMANDA PASCUAL ALOY',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/amanda.png',
            },
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
            }],
            seller_reputation:2,
            seller_opinions:[,
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:2,
            },
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:2,
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            
            a =await User.create({
            email:'anabel@altecom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'ANTONIA',
            last_name:'VALLÉS GIRVENT',
            country:'España',
            province_state:'Tarragona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
            buyer_reputation:2,
            buyer_opinions:[
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            },
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            }],
            seller_reputation:5,
            seller_opinions:[,
            {
            commenter:'ESTEFANIA AROCAS PASADAS',
            comment:'',
            rating:5,
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:3,
            },
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:5,
            }]
            })
            
            
            
            
            a =await User.create({
            email:'antiga@minorisa.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'CATALINA',
            last_name:'RAYA GARCIA',
            country:'España',
            province_state:'Barcelona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
            buyer_reputation:5,
            buyer_opinions:[
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png',
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            }],
            seller_reputation:2,
            seller_opinions:[,
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:1,
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:2,
            },
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:1,
            }]
            })
            
            
            
            a =await User.create({
            email:'agata@hotmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'CATALINA',
            last_name:'VISO GILABERT',
            country:'España',
            province_state:'Barcelona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png',
            buyer_reputation:4,
            buyer_opinions:[
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'PAULETTE RAYA GAVILAN',
            comment:'',
            rating:2,
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:1,
            },
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:5,
            }]
            })
            
            
            
            a =await User.create({
            email:'badia@hotmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'CESAR',
            last_name:'BADIA TORNÉ',
            country:'España',
            province_state:'Valencia',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            },
            {
            commenter:'PAULETTE RAYA GAVILAN',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png',
            },
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg',
            }],
            seller_reputation:2,
            seller_opinions:[,
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:3,
            },
            {
            commenter:'DANIEL ANDREU CRUZ',
            comment:'',
            rating:1,
            },
            {
            commenter:'RUBEN BIDAULT CULLERÉS',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            a =await User.create({
            email:'tricia@gmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'CRISTOBAL',
            last_name:'AYALA FERRERAS',
            country:'España',
            province_state:'Zaragoza',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
            buyer_reputation:5,
            buyer_opinions:[
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:4,
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:3,
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            }]
            })
            
            
            
            
            a =await User.create({
            email:'ballador@hotmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'DANIEL',
            last_name:'ANDREU CRUZ',
            country:'España',
            province_state:'Tarragona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/daniel.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            },
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/catalina.png',
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:5,
            },
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:2,
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:5,
            }]
            })
            
            
            
            a =await User.create({
            email:'africa@altecom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'ESTEFANIA',
            last_name:'AROCAS PASADAS',
            country:'España',
            province_state:'Zaragoza',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2022/antonia.png',
            buyer_reputation:5,
            buyer_opinions:[
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/sol.png',
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:4,
            },
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:1,
            },
            {
            commenter:'FELIPE BAEZ TEJADO',
            comment:'',
            rating:4,
            }]
            })
            
            
            
            a =await User.create({
            email:'albatros@wandoo.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'FELIPE',
            last_name:'BAEZ TEJADO',
            country:'España',
            province_state:'Zaragoza',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png',
            buyer_reputation:2,
            buyer_opinions:[
            {
            commenter:'PEDRO ZAMBUDIO FIGULS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png',
            },
            {
            commenter:'KUYEN BERENGUERAS CULLERÉS',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
            },
            {
            commenter:'GUIDO MORALES GESE',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:3,
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:4,
            },
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:5,
            }]
            })
            
            
            
            a =await User.create({
            email:'balladora@altecom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'FERNANDA',
            last_name:'BARALDÉS COMAS',
            country:'España',
            province_state:'Lleida',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            buyer_reputation:2,
            buyer_opinions:[
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/sol.png',
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:4,
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:4,
            },
            {
            commenter:'ESTEFANIA AROCAS PASADAS',
            comment:'',
            rating:3,
            }]
            })
            
            
            a =await User.create({
            email:'pipila@anet.com.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'GUIDO',
            last_name:'MORALES GESE',
            country:'España',
            province_state:'Tarragona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2016/guido.jpg',
            buyer_reputation:4,
            buyer_opinions:[
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            },
            {
            commenter:'PEDRO ZAMBUDIO FIGULS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png',
            },
            {
            commenter:'PEDRO ZAMBUDIO FIGULS',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:4,
            },
            {
            commenter:'PAULETTE RAYA GAVILAN',
            comment:'',
            rating:4,
            },
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:2,
            }]
            })
            
            
            a =await User.create({
            email:'barbilla@hotmail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'KUYEN',
            last_name:'BERENGUERAS CULLERÉS',
            country:'España',
            province_state:'Valencia',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
            buyer_reputation:5,
            buyer_opinions:[
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            },
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png',
            },
            {
            commenter:'FELIPE BAEZ TEJADO',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/felipe.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:3,
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:3,
            },
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:4,
            }]
            })
            
            
            
            a =await User.create({
            email:'besugo@minorisa.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'NICOLAS',
            last_name:'LÓPEZ DE PABLO GARCIA UCEDA',
            country:'España',
            province_state:'Zaragoza',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            },
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png',
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/sol.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'FELIPE BAEZ TEJADO',
            comment:'',
            rating:5,
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:5,
            },
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            a =await User.create({
            email:'bogart@terra.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'PALOMA',
            last_name:'ARNAU MORENO',
            country:'España',
            province_state:'Girona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            buyer_reputation:5,
            buyer_opinions:[
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            },
            {
            commenter:'KUYEN BERENGUERAS CULLERÉS',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
            },
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:2,
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:5,
            },
            {
            commenter:'PAULETTE RAYA GAVILAN',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            a =await User.create({
            email:'bond@terra.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'PAULETTE',
            last_name:'RAYA GAVILAN',
            country:'España',
            province_state:'Lleida',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png',
            buyer_reputation:4,
            buyer_opinions:[
            {
            commenter:'KUYEN BERENGUERAS CULLERÉS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/kuyen.jpg',
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/fernanda.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:5,
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:2,
            },
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:2,
            }]
            })
            
            
            a =await User.create({
            email:'terra@deprice.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'PEDRO',
            last_name:'ZAMBUDIO FIGULS',
            country:'España',
            province_state:'Lleida',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/pedro.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            },
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            },
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:3,
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:4,
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:2,
            }]
            })
            
            
            
            a =await User.create({
            email:'cabezalarga@cataloniamail.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'RUBEN',
            last_name:'BIDAULT CULLERÉS',
            country:'España',
            province_state:'Valencia',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/antonia.png',
            },
            {
            commenter:'DANIEL ANDREU CRUZ',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/daniel.png',
            },
            {
            commenter:'RUBEN BIDAULT CULLERÉS',
            comment:'',
            rating:4,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/ruben.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:2,
            },
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:3,
            },
            {
            commenter:'ANTONIA VALLÉS GIRVENT',
            comment:'',
            rating:4,
            }]
            })
            
            
            
            
            
            a =await User.create({
            email:'clar@dinam.com.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'SOL',
            last_name:'BIOSCA FONTANET',
            country:'España',
            province_state:'Zaragoza',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/sol.png',
            buyer_reputation:2,
            buyer_opinions:[
            {
            commenter:'PAULETTE RAYA GAVILAN',
            comment:'',
            rating:1,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paulette.png',
            },
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:3,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:2,
            },
            {
            commenter:'SOL BIOSCA FONTANET',
            comment:'',
            rating:5,
            },
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:4,
            }]
            })
            
            
            
            a =await User.create({
            email:'tech@domin.com',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'TOMAS',
            last_name:'ZAFRA FIGULS',
            country:'España',
            province_state:'Tarragona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2021/tomas.png',
            buyer_reputation:2,
            buyer_opinions:[
            {
            commenter:'PALOMA ARNAU MORENO',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/paloma.png',
            },
            {
            commenter:'NICOLAS LÓPEZ DE PABLO GARCIA UCEDA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/nicolas.png',
            },
            {
            commenter:'ALMENDRA ANGUERA VILAFRANCA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/almendra.png',
            }],
            seller_reputation:3,
            seller_opinions:[,
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:5,
            },
            {
            commenter:'TOMAS ZAFRA FIGULS',
            comment:'',
            rating:1,
            },
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:1,
            }]
            })
            
            
            
            a =await User.create({
            email:'albert@intercom.es',
            password:'$2a$10$.Hv7nXHXSxSpDyCnpHXDyO5qfaL57BaMscsRFfivZhM6vsSNCqpJW',
            name:'VICTORIA',
            last_name:'BASTARDES SOTO',
            country:'España',
            province_state:'Tarragona',
            rol:'client',
            description:'Seller',
            avatar_image:'http://www.fpp.uchile.cl/content/perfil/2022/victoria.png',
            buyer_reputation:3,
            buyer_opinions:[
            {
            commenter:'CRISTOBAL AYALA FERRERAS',
            comment:'',
            rating:5,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2022/cristobal.png',
            },
            {
            commenter:'CATALINA RAYA GARCIA',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2021/catalina.png',
            },
            {
            commenter:'CESAR BADIA TORNÉ',
            comment:'',
            rating:2,
            buyer_avatar:'http://www.fpp.uchile.cl/content/perfil/2016/cesar.jpg',
            }],
            seller_reputation:4,
            seller_opinions:[,
            {
            commenter:'VICTORIA BASTARDES SOTO',
            comment:'',
            rating:3,
            },
            {
            commenter:'CATALINA VISO GILABERT',
            comment:'',
            rating:4,
            },
            {
            commenter:'FERNANDA BARALDÉS COMAS',
            comment:'',
            rating:4,
            }]
            })
            
            
             


    }
    catch (error) {
        console.log(error)
    }
    
}

module.exports = fxuser;
