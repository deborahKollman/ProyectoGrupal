import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../styles/ProfileId.module.scss'
import {getUser} from '../../redux/action';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { fontSize } from '@mui/system';



export default function ProfileId({user}) {
   






   return (

    <TableContainer component={Paper} className={styles.container}>
        <Toolbar>
        <Typography
            component="div" 
            variant="h2"
        >

         {user.name  && user.name.toUpperCase()}

        </Typography>
    </Toolbar>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontSize: 20 }}>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: 20 }}
            >
              <TableCell >{user.name  && user.name.toUpperCase()}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">{user.province_state}</TableCell>
              <TableCell align="right">{user.country}</TableCell>
              <TableCell align="right">{user.phone_number}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
