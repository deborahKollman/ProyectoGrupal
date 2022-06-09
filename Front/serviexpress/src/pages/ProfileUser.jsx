import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";

const check = /\S+/;
const regExpr = /^[a-z]+$/i;

//Para controlar los inputs, check controla que no este vacio, y regExpr que sean solo caracteres
function validate(input) {
  let errors = {}
  if (!check.test(input.name) || !regExpr.test(input.name) || input.name <= 2) {
    errors.name = "Please, tell us your name!";
  }
  if (!check.test(input.last_name) || !regExpr.test(input.last_name) || input.last_name <= 1) {
    errors.last_name = "Please, tell us your last name!"
  }
  if (!check.test(input.description) || !regExpr.test(input.description) || input.description <= 1) {
    errors.description = "Plase, tell us a bit about you!"
  }
   return errors;
}

const ProfileUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setError] = useState({})
 
  const [input, setInput] = useState({
    name: "",
    last_name: "",
    description: "",
    phone_number: ""
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(input))

    if(!input.name && input.last_name && input.description && input.phone_number) {

    }
  }

  return (
    <div className="page-seller_register">
      <BurgerButton />
      <section className="sel_reg-one">
        <h1>Personal Info</h1>
        <MyTextField
          required
          label="FULL NAME"
          value={input.name}
          type="password"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MyTextField
          required
          label="LAST NAME"
          value={input.last_name}
          type="password"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <UploadImg />
        {/* <MyTextField
          required
          label="DESCRIPTION"
          value={second}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        /> */}
        <MyTextField
          id="outlined-multiline-static"
          label="DESCRIPTION"
          multiline
          rows={4}
          placeholder="Tell us about your business"
        />
        <MyTextField
          required
          label="PHONE NUMBER"
          value={input.phone_number}
          type="number"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MyButtonTwo variant="contained">Continue</MyButtonTwo>
      </section>
    </div>
  );
};

export default ProfileUser;
