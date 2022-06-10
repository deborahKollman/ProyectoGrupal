import React, { useState } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";

import "./styles/Login.scss";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserr } from "../redux/action";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const mOnClick = () => {
    window.open("http://localhost:3001/login/google", "_self");
  };

  const data = {
    username: Email,
    password: Password,
  };

  const mLoggin = () => {
    dispatch(getUserr(data));
  };
  // console.log(user);
  return (
    <div className="page-login">
      <BurgerButton />

      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Login
          </Typography>

          <MyButtonThree
            variant="contained"
            endIcon={<GoogleIcon />}
            onClick={mOnClick}
          >
            Sing In With Google
          </MyButtonThree>

          <MyTextField
            required
            label="E-MAIL"
            value={Email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MyTextField
            label="PASSWORD"
            value={Password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <MyButtonTwo
            variant="contained"
            endIcon={<LockOpenIcon />}
            // onClick={mUser}
            onClick={mLoggin}
          >
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
              <Typography variant="body1" color="initial">
                Remember me
              </Typography>
            </div>
            <Link to="/#">Forgot Password</Link>
          </div>

          <Typography variant="body1" color="initial">
            Not a Member Yet?
            <Link to="/register"> Join now</Link>
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default Login;

// const mUser = () => {
// con axios
// fetch("http://localhost:3001/login/success", {
//   method: "GET",
//   credentials: "include",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
// dispatch(getUser());
// };
