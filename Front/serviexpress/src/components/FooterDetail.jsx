import bootstrap from 'bootstrap';
import styles from '../pages/styles/footerDetail.module.scss';
import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitter.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {getAllCategories} from '../redux/action.js';



export default function FooterDetail(){



  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);



  useEffect(() => {
      dispatch(getAllCategories());


  },[dispatch]);





const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

  }

    
    return <div className={styles.container}>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
        Services
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body fs-4">
      <Box sx={{ maxWidth: 400}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Services</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Services"
          onChange={handleChange}
        >
            {categories.map(e => {
             return  e.services.map(element => {
                return <MenuItem value={element.name}>{element.name}</MenuItem>
              })
            })}
        </Select>
      </FormControl>
    </Box>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed  fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        About Us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body fs-4" >
          ServiExpress es una empresa dedicada a la venta de servicios, donde una persona puede publicar o buscar un servicio en particular y mediante la pagina encontrar varios tipos de servicios, con distinta cantidad de precios y en distintos lugares, aprovechando el que mas le convenga, una persona puede publicar y buscar gratuitamente el servicio necesario, y ofrecemos nuestra pagina como "mediador" donde la persona puede asegurarse de que la persona que contrata sera una persona con buenas opiniones.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body fs-4">
          Nos puedes encontrar en la suguiente direccion: serviexpress@gmail.com<br></br>
          o tambien en las siguienres redes:<br></br>
          Facebook: <br></br>
          Twitter:
      </div>
    </div>
  </div>
</div>



    <div className={styles.footer}>
      <a href='#'><img src={facebook} alt="facebook"></img></a>
      <a href='#'> <img src={twitter} alt="twitter"></img></a>

    </div>

    </div>


};