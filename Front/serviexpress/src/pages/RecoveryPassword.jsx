import React, { useState } from "react";
import {  MyButtonTwo, MyTextField } from "../elements/Forms";
import Typography from "@mui/material/Typography";
import "./styles/Login.scss";
import GppGoodIcon from '@mui/icons-material/GppGood';
const RecoveryPassword = () =>  {
  const [first, setFirst] = useState("");
 
  return (
    <div className="page-login">

      <div className="login-container">
        <section className="content">
          <Typography variant="h4" color="initial">
            Recovery Password
          </Typography>
          <MyTextField
            required
            label="PASSWORD"
            value={first}
            type="password"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <MyTextField
            label="CONFIRM PASSWORD"
            value={first}
            type="password"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />

          <MyButtonTwo variant="contained" endIcon={<GppGoodIcon />}>
            Confirm
          </MyButtonTwo>

        </section>

      </div>
    </div>
  );
};

export default RecoveryPassword