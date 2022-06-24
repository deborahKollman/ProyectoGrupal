import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MySelect = (props) => {
  const {aFirst, pHandleChange} = props;
 
  return (
    <Box sx={{ width: "260px", mt: "30px" }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ color: "black !important" }}
          id="demo-simple-select-label"
        >
          Category
        </InputLabel>
        <Select
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          onChange={pHandleChange}
        >
          <MenuItem value={null}>
            <em>Seleccionar Categoría</em>
          </MenuItem>
          {aFirst.map((pI) => (
            <MenuItem
              key={pI.id}
              value={pI.id}
            >
              {pI.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};



const MySelectTwo = ({aSecond, pHandleChange, pDad}) => {

  //filter by foregin key
  const aSecondFiltered = aSecond.filter(
    (pI) => pI.fk_category === pDad
  );


  return (
    <Box sx={{ width: "260px", mt: "30px" }}>
      <FormControl fullWidth disabled={!pDad}>
        <InputLabel
          sx={{ color: "black !important" }}
          id="demo-simple-select-label"
        >
          Service
        </InputLabel>
        <Select
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          onChange={pHandleChange}
        >
          <MenuItem value={null}>
            <em>Seleccionar Servicio</em>
          </MenuItem>
          {aSecondFiltered.map((pII) => (
            <MenuItem
              key={pII.id}
              value={pII.id}
            >
              {pII.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};





const MySelectCategory = (props) => {
  const {aFirst, pSCategory, pSetCategory} = props;
  console.log("pSCategory", pSCategory);
  const pHandleChange = (e) => {
    pSetCategory(e.target.value);
  }

  return (
    <Box sx={{ width: "260px", mt: "30px" }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ color: "black !important" }}
          id="demo-simple-select-label"
        >
          Category
        </InputLabel>
        <Select
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          onChange={pHandleChange}
          value={pSCategory}
        >
          <MenuItem value={null}>
            <em>Seleccionar Categoría</em>
          </MenuItem>
          {aFirst.map((pI) => (
            <MenuItem
              key={pI.id}
              value={pI.id}
            >
              {pI.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export { MySelect, MySelectTwo, MySelectCategory };
