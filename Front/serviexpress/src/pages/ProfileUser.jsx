import React, { useState } from "react";
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";

const ProfileUser = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

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
        <MyTextField
          required
          label="DESCRIPTION"
          value={second}
          type="text"
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
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
