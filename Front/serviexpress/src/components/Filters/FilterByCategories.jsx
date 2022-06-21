import React from 'react'
import {filterCategories, getAllCategories} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Styles from './Filter.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography'

//El filtro esta todo hecho, solo le falta la funcionalidad usando redux
const FilterByCategories = () => {

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories)
  console.log(allCategories)

  useEffect(() => { 
    dispatch(getAllCategories())
  }, [dispatch])

  function handleChange(e) {
    e.preventDefault();
    dispatch(filterCategories(e.target.value))
  } 

  return (

    <List sx={{ width: '100%', bgcolor: 'rgb(255, 222, 6)', display: 'flex', flexDirection: 'row'}}>
        
      {allCategories.map((e,index) => {
        return ( 
            <ListItem alignItems="flex-start">
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
               >
              <ListItemText
                primary={e.name}
              />
              </ListItemButton>
            </ListItem>
        );
      })
      }
    </List>
  )

/* 
      <ListItem alignItems="flex-start">
      <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
        <ListItemText
          primary="Idioms"
        />

      </ListItemButton>

      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Construction"

        />
      </ListItem>
    </List> */
}

export default FilterByCategories