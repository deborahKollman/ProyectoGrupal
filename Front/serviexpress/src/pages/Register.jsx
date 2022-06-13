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
import swal from "sweetalert"; 
import {useNavigate} from 'react-router-dom'
import { responsiveProperty } from "@mui/material/styles/cssUtils";


const Register = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  })

  const handleEmailChange = (e) => {

    setInput({
      ...input,
      'email' : e.target.value
    })
  };

  const handlePasswordChange = (e) => {

    setInput({
      ...input,
      'password' : e.target.value
    })
    if (input.password.length<6) setInput({
      ...input,
      PasswordError: 'Password length must have at least 6 characteres'
    });

    if (input.confirmPassword !== input.password) setInput({
      ...input,
      confirmPasswordError: 'Keys do not match'
    });

  };

  const handleConfirmPasswordChange = (e) => {
    setInput({
      ...input,
      'confirmPassword' : e.target.value
    })
    if (input.confirmPassword !== input.password) setInput({
      ...input,
      confirmPasswordError: 'Keys do not match'
    });
  };

  const buttonHandler = async () => {
      try {
         const response = await axios.post('http://localhost:3001/users/register', 
            {
              email: input.email,
              password: input.password
            }, 
            {headers: { "Content-Type": "application/json" }}
          );
          console.log('Button handler',response.data)
        console.log(response);
        if (response.data.message === 0) navigate('/user')
        else if (response.data.message === 1) 
        swal({
          title: "ERROR",
          text: "Email ya registrado",
          //icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
          dangerMode: true,
        });
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
            name='email'
            //value={email}
            type="email"
            onChange={(e) => handleEmailChange(e)}
          />

          <MyTextField
            required
            label="PASSWORD"
            name='password'
            //value={password}
            type="password"
            onChange={(e) => handlePasswordChange(e)}
          />
          <MyTextField
            label="CONFIRM PASSWORD"
            name='confirmPassword'
            //value={confirmPassword}
            type="password"
            onChange={(e) => {handleConfirmPasswordChange(e);
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