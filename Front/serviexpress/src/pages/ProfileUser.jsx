import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";
import FormControl from '@mui/material/FormControl';
import { postProfileUser } from "../redux/action";

const ProfileUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProfileUser(input))
    setInput({
      name: "",
      last_name: "",
      description: "",
      phone_number: ""
    })
    navigate('/Home')
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
        <MyButtonTwo variant="contained" type="submit" onChange={(e)=>{handleSubmit(e)}}>Continue</MyButtonTwo>
        </FormControl>
      </section>
    </form>
    </div>
  );
};

export default ProfileUser;
