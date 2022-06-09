import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";

const check = /\S+/;
const regExpr = /^[a-z]+$/i;

function validate(input) {
  let errors = {}
  if (!check.test(input.name) || !regExpr.test(input.name) || input.name <= 2) {
    errors.name = "Please, tell us your name!";
  }
   return errors;
}

const ProfileUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setError] = useState({})
 
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    description: "",
    phoneNumber: ""
  })

  return (
    <div className="page-seller_register">
      <BurgerButton />
      <section className="sel_reg-one">
        <h1>Personal Info</h1>
        <MyTextField
          required
          label="FULL NAME"
          value={first}
          type="password"
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <MyTextField
          required
          label="LAST NAME"
          value={second}
          type="password"
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
        <UploadImg />
        {/* <MyTextField
          required
          label="DESCRIPTION"
          value={second}
          type="text"
          onChange={(e) => {
            setSecond(e.target.value);
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
          value={second}
          type="number"
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
        <MyButtonTwo variant="contained">Continue</MyButtonTwo>
      </section>
    </div>
  );
};

export default ProfileUser;
