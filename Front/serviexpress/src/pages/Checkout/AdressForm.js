import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import { useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postForm } from '../../redux/action';

export default function AddressForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let myOrderSelected = JSON.parse(localStorage.getItem('order'))

  let todaysDate = new Date();
  console.log(todaysDate)
   
  const [input, setInput] = useState({
    id: myOrderSelected.id,
    contract_date: '',
    country: '',
    postal_code: '',
    state: '',
    city: '',
    adress: '',
    service_date: todaysDate,
})

function handleChange(e) {
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
}

function handleSubmit(e) {
  e.preventDefault();  
      dispatch(postForm(input))
      alert("Transaccion successfull")
      setInput({
        id: '',
        contract_date: '',
        country: '',
        postal_code: '',
        state: '',
        city: '',
        adress: '',
        service_date: todaysDate,
      })
}

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Service address
      </Typography>

      <FormControl onSubmit={(e) => {handleSubmit(e)}} >

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="contract_date"
            value={input.contract_date}
            label="Contract day"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="adress"
            value={input.adress}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={input.city}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={input.state}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="postal_code"
            value={input.postal_code}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={input.country}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </FormControl>
    </React.Fragment>
  );
}