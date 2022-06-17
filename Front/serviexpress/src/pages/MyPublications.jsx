import React from "react";
import NavBar from "../components/NavBar/NavBar"
import { useParams } from "react-router-dom";
import CardPublications from "../components/CardPublicationsEdit/CardPublicationsEdit";
import Stylesedit from "./styles/MyPublications.module.scss";

export default function MyPublications() {

// const {id} = useParams();
const Publications =[
    {id:5,
    album:["https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png","https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg"],
    title:"Developer",
    detail_resume:"soy diseñador grafico",
    price:"15"},
    {id:6,
    album:["https://www.elfinanciero.com.mx/resizer/ssJUev4Vk8S8NwxLIVQe3rGgVbk=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/GZZCJBA2J5BJHD2TX7ESF3X5OA.jpg","https://www.caracteristicas.co/wp-content/uploads/2019/02/arquitectura-5-e1586622216558.jpg"],
    title:"Arquitecture",
    detail_resume:"soy diseñador grafico",
    price:"15"},
    {id:7,
    album:["https://estudiolanzi.com.ar/wp-content/uploads/2021/06/Los-8-servicios-de-disen%CC%83o-gra%CC%81fico-ma%CC%81s-solicitados-en-el-mercado.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1eB-coNxylEpCcR4hhT2WVw5wpxHLc7E5k_NFQVxgNmH8kWTJLchmJ2Ep04QyDWQjYg&usqp=CAU"],
    title:"Desing",
    detail_resume:"soy diseñador grafico",
    price:"15"}]

return (

        <div>
         <NavBar></NavBar>
         <div>
         <h1 className={Stylesedit.title} >Publications</h1>
         </div>
         <div className={Stylesedit.conteineredit}>
        
            {
        Publications.map((e) => {
            return (
                <div >
                <CardPublications
                    id={e.id}
                    album={e.album}
                    title={e.title}
                    summary={e.detail_resume}
                    price={e.price}
                    userId={e.userId}
                  // opinions= {e.opinions}
                />
                </div>
            )
          })
       
     
       
         }
        </div>
        </div>

    

)
        }