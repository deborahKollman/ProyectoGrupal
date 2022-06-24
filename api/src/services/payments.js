require('dotenv').config();
const { Payment, Contract, Publication, User }=require('../database/postgres.js')
const Stripe = require('stripe')
const axios = require('axios');

const stripe = new Stripe(process.env.STRIPEPRVKEY)


const mercadopago = require('mercadopago');

mercadopago.configure({
	access_token: process.env.MERCADOKEY,
});
  

exports.getPayments=async()=>{
    const services=await Payment.findAll()
    return services;
}

exports.postPayment = async(stripeid, amount, usremail = 'palmabeto@hotmail.com', idBuyer, idPublication )=>{
  const contentHtml=`
  <div style="background-color: rgb(242, 229, 206)">
  <h1 style="background-color: rgb(255, 222, 6)">Payment Confirmation</h1>
  <ul>
    <li>Name: ${usremail}</li>
    <li>Amount: ${amount}</li>
    </ul>
  <p style="background-color: rgb(255, 222, 6)">Your payment has been registered</p>
  </div>
  `
  try {
        
    console.log('Grabo el Stripe Id:', stripeid, ' y el monto:',amount)
    //Confirmo el pago en stripe
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: stripeid,
        payment_method_types: ['card'],
        confirm: true
    });

    // Guardo un fake contract
    const contract = await Contract.create({"country": 'Argentina', "postal_code":2000,"city":'Rosario', "state": 'Santa Fe', "address":'San Martin', "service_date":'01/01/2020'})
    
    //Relaciono la publicacion con el contrato
    const pub = await Publication.findByPk(idPublication);
    pub.setContracts(contract)

    //Relaciono el comprador con el contrato
    const usr = await User.findByPk(idBuyer);
    usr.setContracts(contract)


    // Busco el contrtato
    
    // Guardo el pago en la base de datos
    const pay = await Payment.create({stripeid,amount})
    contract.setPayment(pay)
    //console.log('El payment',payment)



    //Envio el mail al comprador
    const sendmail = await axios.post("http://localhost:3001/emailpayment",{
      "email":usremail,
      "subject": "Servi Express - Payment Confirmation",
      "html": contentHtml
  })
  
  return "Service purchased";

    //console.log(payment);
    //return "Service purchased";

}
    catch(error) {
        console.log(error.raw.message);
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