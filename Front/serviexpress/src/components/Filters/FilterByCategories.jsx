import React from 'react'
import {filterCategories, getAllCategories} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Styles from './Filter.module.scss'

//El filtro esta todo hecho, solo le falta la funcionalidad usando redux
const FilterByCategories = () => {

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
    <>
    <div className={Styles.filterctn}>
      <Form.Select size="lg">
        <option disabled>Filter by categories</option>
        {allCategories?.map((category) => {
          return <option>{category.name}</option>
        } )}
      </Form.Select>
    </div>
    {/* <select onChange={(e) => handleChange(e)}>
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Categories"
      >
        <MenuItem value="all"><em>All</em></MenuItem>

          {allCategories?.map((category) => {
            return <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
          })}

      </Select>
    </FormControl>
    </select> */}
    </>
  )
}

export default FilterByCategories