import React, { useState, useEffect } from "react";
import { MyButtonThree, MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./styles/Login.scss";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  clearErrorRegister,
  clearUserRegister,
} from "../redux/action";

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
  const { errorRegister, reg_user } = useSelector((state) => state);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [handleError, setHandleError] = useState({});

  const handleChangeOnForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setHandleError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      }),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(form);
    setHandleError(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(registerUser(form));
    }
    if (errorRegister.message) {
      swal("Error", errorRegister.message, "error");
      dispatch(clearErrorRegister());
    }
    setForm({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  useEffect(() => {
    if (errorRegister.message) {
      swal("Error", errorRegister.message, "error");
      dispatch(clearErrorRegister());
    }
    if (reg_user.message) {
      swal("Success", "Usuario registrado correctamente", "success");
      dispatch(clearUserRegister());
      navigate("/login");
    }
  }, [errorRegister, dispatch, reg_user, navigate]);

  const mGoogleRegister = () => {
    window.open("http://localhost:3001/register/google", "_self");
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
            value={form.email}
            type="email"
            onChange={handleChangeOnForm}
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
            value={form.password}
            type="password"
            onChange={handleChangeOnForm}
          />
          {
            <div className="error-div">
              <p>{handleError.password}</p>
            </div>
          }

          <MyTextField
            label="CONFIRM PASSWORD"
            name="confirmPassword"
            value={form.confirmPassword}
            type="password"
            onChange={handleChangeOnForm}
          />
          {
            <div className="error-div">
              <p>{handleError.confirmPassword}</p>
            </div>
          }

          <MyButtonTwo
            onClick={handleSubmit}
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
