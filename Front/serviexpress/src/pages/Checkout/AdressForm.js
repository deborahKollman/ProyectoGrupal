import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import { useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postForm } from '../../redux/action';

  

export default function AddressForm({getStepContent, setActiveStep}) {

  const dispatch = useDispatch();

  let myOrderSelected = JSON.parse(localStorage.getItem('order'))
  let todaysDate = new Date();

  const [input, setInput] = useState('')
  
  const [errors, setError] = useState(false)
  const [leyenda, setLeyenda] = useState('')


function handleSubmit(e) {
  e.preventDefault();  
  if(input.address && input.state && input.city && input.postal_code && input.contract_date && input.country) { 
    dispatch(postForm(input))
    console.log(input)
    swal({
      title: 'Completed',
      icon: 'success'
    })
    setInput('')
  }
  else {
    //setError(validate(input))
  }

}

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Service address
      </Typography>

      <form onSubmit={(e) => {handleSubmit(e)}} >

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          onChange={(e) => {
            setInput(e.target.value);
            if (input.length === 0) {
              setError(true)
              setLeyenda('Complete this field')
            }
            else if (input.length < 1) {
              setError(true)
              setLeyenda('Please enter your address')
            } 
            else {
              setError(false)
              setLeyenda('')
            }
          }}
          error={errors}
          helperText={leyenda}
          name='address'
          label="Address"
          variant="standard"
        />
          {/* <TextField
            required
            id="address1"
            name="address"
            value={input.address}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => handleChange(e)}
          /> */}
          {errors.address? errors.adress : null}
        </Grid>

        <Grid item xs={12} sm={6}>
          <p>Date</p>
          <input
            required
            type="date"
            id="lastName"
            name="contract_date"
            value={input.contract_date}
            label="Contract day"
 
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
         
          />
          {errors.postal_code? errors.postal_code : null}
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
           
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            />
        </Grid>
            <Button
             type="submit"
             variant="contained"
             color='success'
             sx={{ mt: 3, ml: 3 }}
            >Submit</Button>
      </Grid>
      </form>
    </React.Fragment>
  );
}