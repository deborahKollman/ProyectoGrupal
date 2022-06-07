import React from 'react'
import { Fragment } from 'react'

import TextField from '@mui/material/TextField';
import AndroidIcon from '@mui/icons-material/Android';

import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const MyTextField = styled(TextField)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



const Login = () => {
  return (
    <Fragment>
      <div style={{"margin":"30px"}}>
      <MyButton>Styled Components</MyButton>;

      <MyTextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />

      <TextField value="" id="outlined-basic" label="Outlined" variant="outlined" style={{"background-color":"#31059957", borderColor: 'white !important'}}/>
      <AndroidIcon fontSize="large" />
      </div>
    </Fragment>
  )
}
