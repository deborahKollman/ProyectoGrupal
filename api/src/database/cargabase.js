
const { Category, Service, User } = require('../../src/database/postgres');

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
    }
    catch (error) {
        console.log(error)
    }
    
}

module.exports = fx;
