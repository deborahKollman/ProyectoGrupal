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


const savePayment = async function (idPublication,idBuyer,stripeid,amount,contractId) {
  // Guardo un fake contract
  //const contract = await Contract.create({"country": 'Argentina', "postal_code":2000,"city":'Rosario', "state": 'Santa Fe', "address":'San Martin', "service_date":'01/01/2020'})
  
  // Busco el contrtato
  const contract = await Contract.findByPk(contractId);

  if (contract) {
    console.log('Payments Contrato:',contract);

    // Guardo el pago en la base de datos
    const pay = await Payment.create({stripeid,amount})
    contract.setPayment(pay)
  }
};

const sendBuyerMail = async function (usremail,title,amount) {
  const contentHtml=`
  <div style="background-color: rgb(242, 229, 206)">
  <h1 style="background-color: rgb(255, 222, 6)">Payment Confirmation</h1>
  <ul>
    <li>Name: ${usremail}</li>
    <li>Service: ${title}</li>
    <li>Amount: ${amount}</li>
    </ul>
  <p style="background-color: rgb(255, 222, 6)">Your payment has been registered</p>
  </div>
  `
      //Envio el mail al comprador
      const sendmail = await axios.post ("http://localhost:3001/emailpayment",{
        "email":usremail,
        "subject": "Servi Express - Payment Confirmation",
        "html": contentHtml
  })
}


exports.postPayment = async(stripeid, amount, usremail = 'palmabeto@hotmail.com', idBuyer=1, idPublication=1,title='', contractId=1 )=>
{
  try {
    //Confirmo el pago en stripe

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: stripeid,
        payment_method_types: ['card'],
        confirm: true
    });

    savePayment(idPublication,idBuyer,stripeid,amount,contractId);
    sendBuyerMail(usremail,title,amount);
        
    // Volver a poner----se saco para probar con Postman
    return payment
  }
  catch(error) {
        console.log(error)
        return (error)
  }
}

//exports.postMercadopago = async(title, price,usremail = 'palmabeto@hotmail.com', idBuyer=1, idPublicacion=1) =>{
  exports.postMercadopago = async(title, price, contractId) =>{
    try {
        const preference = {
            items: [{
              title,
              unit_price: parseInt(price),
              quantity: 1,
            }
            ],
            back_urls: {
              "success": "http://localhost:3000/mercado/success?title="+title+"&price="+price+"&contractId="+contractId,
              "failure": "http://localhost:3000/mercado/failure",
              "pending": "http://localhost:3000/home"
            },
            auto_return: "approved",
        }

      const data = await mercadopago.preferences.create(preference);
      const respId = data.body.id;
      //savePayment(idPublicacion,idBuyer,respId,price);
      //sendBuyerMail(usremail,title,price);
      //this.postPayment(respId,price,usremail, idBuyer, idPublicacion,title)
      console.log('Respond ID de MP:', respId);
      return respId;
      
    } catch (error) {
      console.log(error);
    }
};

exports.postMercadopagoSuccess2 = async (codigoPago ,title,price,contractId=1) => {
  console.log('en grabar')
  const idPublicacion=1;
  const idBuyer=1;
  const usremail='palmabeto@hotmail.com';
  savePayment(idPublicacion,idBuyer,codigoPago,price,contractId);
  sendBuyerMail(usremail,title,price);
}


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