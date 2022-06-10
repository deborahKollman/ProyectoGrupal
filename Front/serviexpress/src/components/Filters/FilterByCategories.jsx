import React from 'react'
import {filterCategories, getAllCategories} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//El filtro esta todo hecho, solo le falta la funcionalidad usando redux
const FilterByCategories = () => {

  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories)

  useEffect(() => { 
    dispatch(getAllCategories())
  }, [dispatch])

  function handleFilterCategories(e) {
    e.preventDefault();
    dispatch(filterCategories(e.target.value))
  } 

  return (
    <>
    <select onChange={handleFilterCategories}>
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={input}
        label="Categories"
        onChange={handleChange}
      >
        <MenuItem value="all"><em>All</em></MenuItem>

          {allCategories?.map((category) => {
            return <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
          })}

      </Select>
    </FormControl>
    </select>
    </>
  )
}

export default FilterByCategories