import React, { useState } from "react";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./styles/Login.scss";
import swal from "sweetalert";
import sweetalert from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmPassword } from "../redux/action";

const validateForm = (form) => {
  const errors = {};
  if (!form.password) {
    errors.password = "Por favor, ingresa una contraseña";
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
};

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    confirmPassword: "",
  });

  const handleFormChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    setError(
      validateForm({
        ...form,
        [name]: value,
      }),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length === 0) {
      dispatch(confirmPassword(form));
      setForm({
        password: "",
        confirmPassword: "",
      });
      navigate("/home");
    } else {
      // swal("Error", "Por favor, revisa los errores", "error");
      sweetalert("Error", "Por favor, revisa los errores", "error");
    }
  };

  return (
    <div className="page-login">
      <BurgerButton />
      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Confirm Password
          </Typography>

          <MyTextField
            required
            label="PASSWORD"
            name="password"
            type="password"
            value={form.password}
            onChange={handleFormChange}
          />
          {
            <div className="error-div">
              <p>{error.password}</p>
            </div>
          }

          <MyTextField
            required
            label="CONFIRM PASSWORD"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleFormChange}
          />
          {error.confirmPassword && (
            <div className="error-div">
              <p>{error.confirmPassword}</p>
            </div>
          )}

          <MyButtonTwo
            variant="contained"
            endIcon={<HowToRegIcon />}
            onClick={handleSubmit}
          >
            Register
          </MyButtonTwo>
        </section>
      </div>
    </div>
  );
};

export default ConfirmPassword;
