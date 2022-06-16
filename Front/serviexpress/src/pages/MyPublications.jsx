import React from "react";
import styles from "./styles/edit.scss";
import NavBar from "../components/NavBar/NavBar"
import { useParams } from "react-router-dom";
import CardPublications from "../components/CardPublications/CardPublications";
// import styles from "./styles/edit.module.scss";

export default function MyPublications() {

// const {id} = useParams();
const Publications =[
    {id:5,
    album:["https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png","https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg"],
    title:"Desing",
    detail_resume:"soy diseñador grafico",
    price:"15"}]

return (

        <div className={styles.Editconteiner}>
         <NavBar></NavBar>
         <div>
         <p>holaaa</p>
            {
        Publications.map((e) => {
            return (
                <div>
                <CardPublications
                    id={e.id}
                    album={e.album}
                    title={e.title}
                    summary={e.detail_resume}
                    // score={e.score}
                    price={e.price}
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