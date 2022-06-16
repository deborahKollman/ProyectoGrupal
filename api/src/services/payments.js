require('dotenv').config();
const { Payment }=require('../database/postgres.js')
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPEPRVKEY)

exports.getPayments=async()=>{
    const services=await Payment.findAll()
    return services;
}

exports.postPayment= async(stripeid, amount)=>{
    try {
        
        console.log('Grabo el Stripe Id:', stripeid, ' y el monto:',amount)
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'U$S',
            payment_method: stripeid,
            confirm:true
        });
        const r = await Payment.create({stripeid,amount})
        console.log('El payment', payment)
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