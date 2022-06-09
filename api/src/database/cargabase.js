
const { Category, Service, User, Publication } = require('../../src/database/postgres');

const fx = async function() {
    try {
        const juan=await User.create(
            {email:'nnxx@hotmail.com', 
            password: '123456', 
            name: 'NN', 
            last_name: 'Perez',
            country: 'Peru',
            province_state: 'Lima',
            rol: 'client' ,
            buyer_reputation: 3, 
            seller_reputation: 4
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
                "id": 1,
                "date": "2022-06-09T23:25:03.723Z",
                "state": "Active",
                "title": "Titulo de la publicacion",
                "album": [
                "http://localhost:3001/public/img/pub/pictures-1654817103521.jpeg"
                ],
                "detail": "instalaciones sin fallas",
                "detail_resume": "Sus necesidades son nuestro compromiso",
                "price": 5000,
                "userId": 1,
                "categoryId": 1,
                "services": []
                }
        )
        const pub2=await Publication.create( 
        {
            "id": 2,
            "date": "2022-06-09T23:25:33.552Z",
            "state": "Active",
            "title": "2da publicacion",
            "album": [
            "http://localhost:3001/public/img/pub/pictures-1654817133339.jpeg"
            ],
            "detail": "instalaciones sin fallas",
            "detail_resume": "Contrateme",
            "price": 5000,
            "userId": 1,
            "categoryId": 2,
            "services": []
            },
        )
        const pub3=await Publication.create( 
            {
                "id": 3,
                "date": "2022-06-09T23:28:02.650Z",
                "state": "Active",
                "title": "3era publicacion",
                "album": [
                "http://localhost:3001/public/img/pub/pictures-1654817282324.jpeg"
                ],
                "detail": "Lo mas",
                "detail_resume": "Contrateme",
                "price": 200,
                "userId": 1,
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
