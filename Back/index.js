const express = require ('express')
const morgan = require ('morgan')
const router = require ('./routes/index.js')

const app=express();

// MIddlewares

app.use(express.json());
app.use(morgan("combined"))

// Enrutador

app.use("/",router)

//Endwares

app.use((error,req,res,next)=>{
    res.status(500).send({msg_error: error.message})
})

app.listen(3001)
