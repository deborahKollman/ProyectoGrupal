import React, { useState } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from '@mui/icons-material/Google';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import "./styles/Login.scss";
import { Link } from "react-router-dom";


const Register = () => {
  const [first, setFirst] = useState("");

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
            value={first}
            type="email"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyTextField
            required
            label="PASSWORD"
            value={first}
            type="password"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <MyTextField
            label="CONFIRM PASSWORD"
            value={first}
            type="password"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButtonTwo variant="contained" endIcon={<HowToRegIcon />}>
            Register
          </MyButtonTwo>
 
        </section>

      </div>
    </div>
  );
};


export default Register