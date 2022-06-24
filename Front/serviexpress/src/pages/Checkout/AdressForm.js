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

  const check = /\S+/;
  const regExpr = /^[a-z]+$/i;
  const regNum = /^\d+$/;

// function validate(input) {
//   let errors = {}
//   if (!check.test(input.adress) || !check.test(input.state) || !check.test(input.city) ) {
//    errors.adress = swal({
//       title: 'Please, fill all the fields',
//       icon: 'warning'
//     })
//   }
//   // if(!regExpr.test(input.city) || !regExpr.test(input.state) || !regExpr.test(input.country)) {
//   //   swal({
//   //     title: 'Incorrect type of data',
//   //     icon: 'warning'
//   //   })
//   // }
//   if(!regNum.test(input.postal_code)) {
//     errors.postal_code = swal({
//       title: 'Zip code must be a number',
//       icon: 'warning'
//     })
//   }
// }

export default function AddressForm({getStepContent, setActiveStep}) {

  const dispatch = useDispatch();
  const [errors, setError] = useState({})
  let myOrderSelected = JSON.parse(localStorage.getItem('order'))

  let todaysDate = new Date();
   
  const [input, setInput] = useState({
    //id: myOrderSelected.id,
    publication: myOrderSelected.id,
    user: 3,
    contract_date: '',
    country: '',
    state: '',
    city: '',
    address: '',
    postal_code: '',
    service_date: todaysDate,
})

function handleChange(e) {
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
  // setError(validate({
  //   ...input,
  //   [e.target.name] : e.target.value
  // }))
}

function handleSubmit(e) {
  e.preventDefault();  
  if(input.address && input.state && input.city && input.postal_code && input.contract_date && input.country) { 
    dispatch(postForm(input))
    console.log(input)
    swal({
      title: 'Completed',
      icon: 'success'
    })
    setInput({
      //id: '',
      contract_date: '',
      country: '',
      postal_code: '',
      state: '',
      city: '',
      address: '',
      service_date: todaysDate,
    })

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
            required
            id="address1"
            name="address"
            value={input.address}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
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
            onChange={(e) => handleChange(e)}
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