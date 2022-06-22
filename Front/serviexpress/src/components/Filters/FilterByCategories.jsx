import styled from "styled-components";
import React from 'react'
import {filterCategories, getAllCategories, getPublicationsByCategory} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Styles from './Filter.module.scss'
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
//import { List } from "react-virtualized";

import Typography from '@mui/material/Typography'

//El filtro esta todo hecho, solo le falta la funcionalidad usando redux
const FilterByCategories = () => {

  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const dispatch = useDispatch();
  const all = [{'id':0, name: 'All Categories'}]
  const allCategories = [...all,...useSelector((state) => state.categories)]
  //console.log(allCategories)

  useEffect(() => { 
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => { 
    if (!allCategories[selectedIndex]) dispatch(filterCategories('all'))
    else  dispatch(getPublicationsByCategory(allCategories[selectedIndex].id))
  }, [selectedIndex])

  function handleChange(e) {
    e.preventDefault();
    dispatch(filterCategories(e.target.value))
  } 

  return (

    <List sx={{ width: '100%', bgcolor: 'rgb(255, 222, 6)', display: 'flex', flexDirection: 'row', mt: '20px', p:'1px',}}>
    {/* <List "height"=150, "width"=250, "rowHeight"= 10 , "rowCount"= 5> */}
        
      {allCategories.map((e,index) => {
        return ( 
            <ListItem alignItems="flex-start">
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
               >
              <ListItemText
                primaryTypographyProps={{fontSize: 13, color: 'black',  fontWeight: 500 }}
                primary={e.name}
              />
              </ListItemButton>
            </ListItem>
        );
      })
      } </List>
  )
/////

/////
}

export default FilterByCategories