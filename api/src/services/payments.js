require('dotenv').config();
const { Payment }=require('../database/postgres.js')
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPEPRVKEY)

const mercadopago = require('mercadopago');

mercadopago.configure({
	access_token: process.env.MERCADOKEY,
});
  


exports.getPayments=async()=>{
    const services=await Payment.findAll()
    return services;
}

exports.postPayment= async(stripeid, amount ,usremail)=>{
    
    try {
        
        console.log('Grabo el Stripe Id:', stripeid, ' y el monto:',amount)
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            payment_method: stripeid,
            usremail,
            confirm: true
        });
/*         const r = await Payment.create({stripeid,amount})
        console.log('El payment',payment)
        return payment; */
        
        return "Service purchased";
    }
    catch(error) {
        console.log(error)
        return (error.raw.message)
    }
}

exports.postMercadopago = async(title, price) =>{
    try {
        const preference = {
            items: [{
              title,
              unit_price: parseInt(price),
              quantity: 1,
            }
            ],
            back_urls: {
              "success": "http://localhost:3000/home",
              "failure": "http://localhost:3000/home",
              "pending": "http://localhost:3000/home"
            },
            auto_return: "approved",
        }


     const data = await mercadopago.preferences.create(preference);
     const respId = data.body.id;
        console.log(respId);
        return respId;
      
    } catch (error) {
      console.log(error);
    }




};







/* 
exports.getServiceById=async(id)=>{
    const service=await Service.findOne({
        where:{id:id},
        include:{
          model:Category,
          through:{
            attributes:[]
          }
        }
    })
    
    return service;
};

exports.postService=async(name,categories=[])=>{
    const service=await Service.create({name:name});
    service.setCategories(categories)

    return {message:'Service updated successfully'}
}

exports.updateService=async(id,name)=>{
  const service=await Service.findById(id);

  if(!service){
    return {err_message:'Service not found'}
  }
  service.update({name});
  return {message:'Service updated successfully'}
}

exports.deleteService=async(id)=>{
  const service= await Service.findById(id);
  if(!service){
    return {err_message:'Service not found'}
  }
  await Service.destroy({where:{id:id}});
  return {message:'Service deleted successfully'}
} */