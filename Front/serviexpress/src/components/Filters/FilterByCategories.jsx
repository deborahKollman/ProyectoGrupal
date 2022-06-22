import styled from "styled-components";
import React from 'react'
import {filterCategories, getAllCategories, getPublicationsByCategory} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const FilterByCategories = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const all = [{'id':0, name: 'All Categories'}]
  const allCategories = [...all,...useSelector((state) => state.categories)]

  useEffect(() => { 
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => { 
    console.log('use-effect',value)
    if (!allCategories[value]) dispatch(filterCategories('all'))
    else  dispatch(getPublicationsByCategory(allCategories[value].id))
  }, [value])

  function handleChange(event, newevent) {
    event.preventDefault();
    setValue(newevent);
  } 
  return (

    <Tabs sx={{ width: '100%', bgcolor: '#fcdc3c', mt: '20px', p:'1px',}}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >

      {allCategories.map((e,index) => {
        return(
        <Tab sx={{fontSize: 12, color: 'black',  fontWeight: 500 }}
          label={e.name} />
        )
        })
      }
    </Tabs>
  )
}

export default FilterByCategories