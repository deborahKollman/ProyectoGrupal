import React, { useState, useEffect } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import Alert from '@mui/material/Alert';

import "./styles/Login.scss";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserr,
  getErrorRegister,
  clearErrorRegister,
} from "../redux/action";

const HookInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

//=>=>=>=>==>=>=>=>=>==> COMPONENT -------------------------

const Login = () => {
  const xDispatch = useDispatch();

  const email = HookInputValue("");
  const password = HookInputValue("");
  const checked = HookInputValue("");

  const mGoogleLogin = () => {
    window.open("http://localhost:3001/login/google", "_self");
  };

  const data = {
    username: email.value,
    password: password.value,
  };

  const { errorLogin, rdcr_isAuth } = useSelector((state) => state);
  const [error, setError] = useState({
    text: "",
  });

  const xNavigate = useNavigate();

  const mLocalLoggin = () => {
    if (data.username === "" || data.password === "")
      setError({ text: "Empty fields" });
    else {
      xDispatch(getUserr(data));
      xDispatch(clearErrorRegister());
    }
  };

  useEffect(() => {
    xDispatch(getErrorRegister());
    if (Object.keys(errorLogin).length > 0) {
      setError({ text: errorLogin });
    } else {
      setError({ text: "" });
    }
    if (rdcr_isAuth) {
      xNavigate("/home");
    }
  }, [errorLogin, rdcr_isAuth]);

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
            onClick={mGoogleLogin}
          >
            Sing In With Google
          </MyButtonThree>

          <MyTextField required label="E-MAIL" type="email" {...email} />
          <MyTextField label="PASSWORD" type="password" {...password} />

<<<<<<< HEAD
          {<p className="error-div">{error.text}</p>}
=======

          {error.text ? <Alert severity="error" sx={{width: '260px', m: 0.5}} >{error.text}</Alert> : null}
>>>>>>> eac6cc932310a2797a62b80c6b4d360c421221c4

          <MyButtonTwo
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={mLocalLoggin}
          >
            Login
          </MyButtonTwo>

          <div className="Login-3">
            <div className="Login-3remenver">
              <Checkbox
                {...checked}
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
// xDispatch(getUser());
// };
