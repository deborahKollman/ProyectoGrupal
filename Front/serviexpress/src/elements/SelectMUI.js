import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MySelect = () => {
  const [Category, setCategory] = React.useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const names = ["one", "two", "three"];

  return (
    <Box sx={{ width: "300px", mt: "30px" }}>
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
          value={Category}
          label="Category"
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export { MySelect };
