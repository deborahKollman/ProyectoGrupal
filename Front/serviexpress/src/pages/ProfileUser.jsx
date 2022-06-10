import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";
import FormControl from '@mui/material/FormControl';

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
      alert('Information succesfully added!')
      setInput({
        name: "",
        last_name: "",
        description: "",
        phone_number: ""
      })
      navigate('/Home')
    }
    else {alert('Please, fill al the fields')}
  }

  return (
    <div className="page-seller_register">
      <BurgerButton />
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
      <section className="sel_reg-one">
        <h1 className="profileUserTitle">Personal Info</h1>

        <FormControl>
        <MyTextField
          required
          label="FULL NAME"
          value={input.name}
          type="text"
          name="name"
          onChange={handleChange}
          />
        <MyTextField
          required
          label="LAST NAME"
          value={input.last_name}
          type="text"
          name="last_name"
          onChange={handleChange}
          />
        <UploadImg />
        <MyTextField
          id="outlined-multiline-static"
          label="DESCRIPTION"
          required
          multiline
          rows={4}
          name="description"
          placeholder="Tell us about your business"
          value={input.description}
          onChange={handleChange}
          />
        <MyTextField
          required
          label="PHONE NUMBER"
          value={input.phone_number}
          type="tel"
          name="phone_number"
          minlength="9"
          maxlength="14"
          onChange={handleChange}
          />
        <MyButtonTwo variant="contained" type="submit">Continue</MyButtonTwo>
        </FormControl>
      </section>
    </form>
    </div>
  );
};

export default ProfileUser;
