import React, { useState } from "react";
import { Fragment } from "react";
import { MyTextField } from "../elements/Forms";
const Login = () => {
  const [first, setFirst] = useState("");
  return (
    <Fragment>
      <MyTextField
        required
        label="E-MAIL"
        value={first}
        type='email'
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <MyTextField
        label="PASSWORD"
        value={first}
        type='password'
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
    </Fragment>
  );
};

export default Login;
