import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


const addresses = ['123', 'Fake Street', 'Springfield'];

export default function Review() {
  let myOrder = JSON.parse(localStorage.getItem('order'))
  console.log(myOrder);
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText>
              <Typography variant="h6">{myOrder.title}</Typography>
              <Typography variant="subtitle1">{myOrder.detail_resume}</Typography>
            </ListItemText>
            <Typography variant="h6">${myOrder.price}</Typography>
          </ListItem>
      

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText>
            <Typography variant="h6">Total</Typography>
          </ListItemText>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
           ${myOrder.price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
   
        </Grid>
      </Grid>
    </React.Fragment>
  );
}