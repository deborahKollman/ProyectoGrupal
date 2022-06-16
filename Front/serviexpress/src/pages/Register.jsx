import React, { useState } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./styles/Login.scss";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action";

const validate = (form) => {
  const errors = {};
  const validate = {
    name: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
  };

  if (!form.email) {
    errors.email = "Por favor, ingresa un correo electrónico";
  }

  if (!validate.name.test(form.email)) {
    errors.email = "The e-mail should be a 'example@example.com' format";
  }

  if (form.password.length < 8) {
    errors.password = "The password should have 8 characters at least";
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "The password should match";
  }

  return errors;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  });

  const [handleError, setHandleError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleEmailChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const buttonHandler = async () => {
    setHandleError(validate(input));
    if (Object.keys(handleError).length === 0) {
      dispatch(registerUser(input));
      swal("Success", "You have successfully registered", "success");
      navigate("/home");
    } else {
      swal("Error", "Por favor, revisa los errores", "error");
    }
  };

  const mGoogleRegister = () => {
    window.open("http://localhost:3001/login/register", "_self");
  };

  return (
    <div className="page-login">
      <BurgerButton />

      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Register
          </Typography>

          <MyButtonThree
            variant="contained"
            endIcon={<GoogleIcon />}
            onClick={mGoogleRegister}
          >
            Register With Google
          </MyButtonThree>

          <MyTextField
            required
            label="E-MAIL"
            name="email"
            value={input.email}
            type="email"
            onChange={(e) => handleEmailChange(e)}
          />
          {
            <div className="error-div">
              <p>{handleError.email}</p>
            </div>
          }
          <MyTextField
            required
            label="PASSWORD"
            name="password"
            //value={password}
            type="password"
            onChange={(e) => handlePasswordChange(e)}
          />
          {
            <div className="error-div">
              <p>{handleError.password}</p>
            </div>
          }

          <MyTextField
            label="CONFIRM PASSWORD"
            name="confirmPassword"
            //value={confirmPassword}
            type="password"
            onChange={(e) => handleConfirmPasswordChange(e)}
          />
          {
            <div className="error-div">
              <p>{handleError.confirmPassword}</p>
            </div>
          }

          <MyButtonTwo
            onClick={(e) => buttonHandler()}
            variant="contained"
            endIcon={<HowToRegIcon />}
          >
            Register
          </MyButtonTwo>
        </section>
      </div>
    </div>
  );
};

export default Register;
