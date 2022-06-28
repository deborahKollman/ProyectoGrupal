import React, { useState, useEffect } from "react";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import BurgerButton from "../components/NavBar/NavBar.jsx";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./styles/Login.scss";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { sendEmail } from "../redux/action";
import { useParams } from "react-router-dom";

const validate = (form) => {
  const errors = {};
  const validate = {
    name: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  };

  if (!form.email) {
    errors.email = "Por favor, ingresa un correo electrónico";
  }

  if (!validate.name.test(form.email)) {
    errors.email = "The e-mail should be a 'example@example.com' format";
  }

  return errors;
};

const SendEmail = () => {
  const { type, userEmail } = useParams();

  const dispatch = useDispatch();
  const [email, setEmail] = useState(userEmail || "");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate({ email: e.target.value }));

    if (Object.keys(errors).length === 0) {
      dispatch(sendEmail({ email, type }));
      swal("¡Enhorabuena!", "Se ha enviado un correo ", "success");
    } else {
      swal("¡Error!", "Por favor, ingresa un correo electrónico", "error");
    }

    setEmail("");
    setErrors({});
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors(
      validate({
        email: e.target.value,
      }),
    );
  };

  return (
    <div className="page-login">
      <BurgerButton />
      <div className="login-container ">
        <section className="content w-100">
          <Typography variant="h4" color="initial">
            Please enter your email to receive a link.
          </Typography>
          <MyTextField
            required
            label="E-MAIL"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-div">{errors.email}</div>}
          <MyButtonTwo
            variant="contained"
            endIcon={<HowToRegIcon />}
            onClick={handleSubmit}
          >
            Send Email
          </MyButtonTwo>
        </section>
      </div>
    </div>
  );
};

export default SendEmail;
