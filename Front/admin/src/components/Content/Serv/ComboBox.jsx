import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_getAllCategories, act_filterServicesByCategory } from "../../../redux/action";
import { Autocomplete, TextField } from "@mui/material";

export const ComboBoxFilter = ({category, setCategory}) => {
  
    const xDispatch = useDispatch();
  
    useEffect(() => {
      xDispatch(act_getAllCategories());
    }, [xDispatch]);
  
    const {rdcr_categories} = useSelector((state) => state);
  
    const mOnChange = (event, value) => {
        console.log(value);
        setCategory(value);
        xDispatch(act_filterServicesByCategory(value));
    }

    return (
      <Autocomplete
        sx={{ width: '100%', mb: "9px" }}
        options={rdcr_categories}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => <h4 {...props} key={option.id}>{option.name}</h4>}
        renderInput={(params) => (
          <TextField {...params} label="Category" variant="standard" />
        )}
        value={category}
        onChange={mOnChange}
      />
    );
  };
  