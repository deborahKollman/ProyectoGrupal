require('dotenv').config();
const { Payment }=require('../database/postgres.js')
const Stripe = require('stripe')
const axios = require('axios');

const stripe = new Stripe(process.env.STRIPEPRVKEY)


exports.getPayments=async()=>{
    const services=await Payment.findAll()
    return services;
}

exports.postPayment= async(stripeid, amount, usremail='palmabeto@hotmail.com')=>{
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
            confirm: true
        });

        // Guardo el pago en la base de datos
/*         const r = await Payment.create({stripeid,amount})
        console.log('El payment',payment)
        return payment; */

        //Envio el mail al comprador
        const sendmail = await axios.post ("http://localhost:3001/emailpayment",{
          "email":usremail,
          "subject": "Servi Express - Payment Confirmation",
          "html": contentHtml
      })

      return payment;
    }
    catch(error) {
        console.log(error)
        return (error)
    }
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