import React, { useState } from "react";
import { MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar";
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './styles/Login.scss'
const StyleMUI = require ('@mui/material/styles').styled;

const Login = () => {
  const [first, setFirst] = useState("");
  return (
    <div className="page-login">
      <BurgerButton />

      <div className="login-container">

        <section className="content">
          
          <Typography variant="h4" color="initial">
            Login
          </Typography>


          <MyTextField
            required
            label="E-MAIL"
            value={first}
            type='email'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <MyTextField
            label="PASSWORD"
            value={first}
            type='password'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButton 
              variant="contained"
              endIcon={<VolunteerActivismIcon />}>
            Join Serviexpress
          </MyButton>

        </section> 
{/* 
        
        <section className="content">
          
          <Typography variant="h4" color="initial">
            Login
          </Typography>

          <MyTextField
            required
            label="E-MAIL"
            value={first}
            type='email'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <MyTextField
            label="PASSWORD"
            value={first}
            type='password'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButton 
              variant="contained"
              endIcon={<VolunteerActivismIcon />}>
            Join Serviexpress
          </MyButton>

        </section> 
        <section className="content">
          
          <Typography variant="h4" color="initial">
            Login
          </Typography>


          <MyTextField
            required
            label="E-MAIL"
            value={first}
            type='email'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <MyTextField
            label="PASSWORD"
            value={first}
            type='password'
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButton 
              variant="contained"
              endIcon={<VolunteerActivismIcon />}>
            Join Serviexpress
          </MyButton>

        </section>  */}


      </div>




      
    </div>
  );
};

export default Login;


const MyButton = StyleMUI(Button)({
  width: '130px',
  color: '#3C2F1E',
  fontWeight: 'bold',
  backgroundColor: '#fcdc3c',
  margin: '4px 40px',
      '&:hover': {
      backgroundColor: '#3C2F1E',
      borderColor: '#3C2F1E',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3C2F1E',
      borderColor: '#3C2F1E',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #ff51007f',
      color: '#ff51007f'
    },
});
