import React, { useState } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from '@mui/icons-material/Google';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import "./styles/Login.scss";
import { Link } from "react-router-dom";
import axios from 'axios';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setErrores] = useState("");

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const emailHandleChange = (event) => {
    //event.target.checked

    setEmail(
      email+event.nativeEvent.data
     )
/*     setErrores(validacionDelFormulario({
      ...email,
      [event.target.name]: event.nativeEvent.data */
  }


  const passwordHandleChange = (event) => {
    setPassword(password+event.nativeEvent.data)
  }


  const buttonHandler = async () => {
      try {
         const response = await axios.post('http://localhost:3001/users/register', 
            {
              email: email,
              password: password
            }, 
            {headers: { "Content-Type": "application/json" }}
          );
          console.log('Button handler',response.data)
        //return response;
      } catch (e) {
        console.log(e.message);
    };
  };


  return (
    <div className="page-login">
      <BurgerButton />

      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Register
          </Typography>

          <MyButtonThree variant="contained" endIcon={<GoogleIcon />}>
            Register With Google
          </MyButtonThree>

          <MyTextField
            required
            label="E-MAIL"
            //value={email}
            type="email"
            onChange={(e) => emailHandleChange(e)}
          />

          <MyTextField
            required
            label="PASSWORD"
            value={password}
            type="password"
            onChange={(e) => passwordHandleChange(e)}
          />
          <MyTextField
            label="CONFIRM PASSWORD"
            value={confirmPassword}
            type="password"
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />

          <MyButtonTwo onClick={(e)=>buttonHandler()} variant="contained" endIcon={<HowToRegIcon />}>
            Register
          </MyButtonTwo>
 
        </section>

      </div>
    </div>
  );
};


export default Register