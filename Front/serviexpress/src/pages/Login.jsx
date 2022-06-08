import React, { useState } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from '@mui/icons-material/Google';

import "./styles/Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
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
            Login
          </Typography>

          <MyButtonThree variant="contained" endIcon={<GoogleIcon />}>
            Sing In With Google
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
            label="PASSWORD"
            value={first}
            type="password"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButtonTwo variant="contained" endIcon={<LockOpenIcon />}>
            Login
          </MyButtonTwo>

          <div className="Login-3">
            <div className="Login-3remenver">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{
                  color: "#000000",
                  "&.Mui-checked": {
                    color: "#fcdc3c",
                  },
                }}
              />
              <Typography variant="body1" color="initial" >
                Remember me
              </Typography>
            </div>
            <Link to="/#" >Forgot Password</Link>
          </div>

          <Typography variant="body1" color="initial" >
            Not a Member Yet?
            <Link to="/register" >    Join now</Link>
          </Typography>

        </section>

      </div>
    </div>
  );
};

export default Login;
