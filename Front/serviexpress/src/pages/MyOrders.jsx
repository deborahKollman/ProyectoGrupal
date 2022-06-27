import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/MyOrder.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { getMyOrders } from '../redux/action';
import { useSelector } from 'react-redux';

const MyOrders = () => {
 
  const myorders = useSelector(state => state.orders);
  console.log(myorders)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'service',
      headerName: 'SERVICE',
      width: 250,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      width: 120,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'STATUS',
      sortable: true,
      width: 120,
    },
  ];
  
  const rows = [
    { id: 1, price: '320', service: 'Plumber', status: 'completed' },
    { id: 2, price: '1800', service: 'Mechanic', status: 'pending'},
    { id: 3, price: '750', service: 'Nurse', status: 'completed'},
    { id: 4, price: '150', service: 'Teacher', status: 'canceled'},
  ];


  return (
    <div className={Styles.container}>
        <BurgerButton />

        <div className={Styles.grid}>
        <h1 className={Styles.title}>My orders: </h1>

   
        <div style={{ height: 400, width: '60%' }}>
       <DataGrid
       
       showCellRightBorder
       showColumnRightBorder
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      </div>
        </div>

        <FooterBar />
    </div>
  )
}

export default MyOrders