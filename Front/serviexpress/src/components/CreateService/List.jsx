import "./Styles.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Autocomplete,
  Toolbar,
  Tooltip,
  Typography,
  TextField,
} from "@mui/material";

import { publicationsColumns } from "./FormatTable";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FeedIcon from "@mui/icons-material/Feed";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ComboBoxFilter } from "../../elements/ComboBox";

const ComboBox = ({ category, setCategory }) => {
  const xDispatch = useDispatch();

  useEffect(() => {
    // xDispatch(act_getAllCategories());
  }, [xDispatch]);

  const rdcr_categories = [];
  return (
    <Autocomplete
      sx={{ width: "100%", mb: "9px" }}
      options={rdcr_categories}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <h4 {...props} key={option.id}>
          {option.name}
        </h4>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Category" variant="standard" />
      )}
      value={category}
      onChange={(event, value) => setCategory(value)}
    />
  );
};

const EnhancedTableToolbar = ({ filter, setFilter }) => {
  const xDispatch = useDispatch();

  const mFilter = () => {
    setFilter(!filter);
    console.log(filter);
  };

  const [category, setCategory] = useState(null);

  const mCleanFilter = () => {
    // xDispatch(act_clearServices());
    setCategory(null);
  };

  return (
    <section>
      <Toolbar
        sx={{
          padding: "0 !important",
        }}
      >
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
          Services
        </Typography>

        <Tooltip title="Filter list" onClick={mCleanFilter}>
          <IconButton>
            <CleaningServicesIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter list" onClick={mFilter}>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {filter && (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <ComboBoxFilter category={category} setCategory={setCategory} />
        </div>
      )}
    </section>
  );
};

const MainPublication = () => {
  
  const [filter, setFilter] = useState(false);
  const {Publications} = useSelector((state) => state);
  
  const actionColumn = [
    {
      field: "action",
      headerName: "ACTIONS",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            > */}
            <IconButton
              color="primary"
              aria-label="Modify"
              size="large"
              // onClick={() => handleModify(params.row.id)}
            >
              <FeedIcon fontSize="inherit" />
            </IconButton>
            {/* </Link> */}

            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              // onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
    },
  ];
  
  return (
    <section className="createService-ListMain">
      <EnhancedTableToolbar filter={filter} setFilter={setFilter} />

      <DataGrid
        sx={{ width: "100%", height: "69vh" }}
        className="datagrid"
        rows={Publications}
        columns={publicationsColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
    </section>
  );
};

export { MainPublication };

/* 

  const [inputs, setInputs] = useState({
    n_name: "",
    n_status: true,
  });

  const [validation, setValidation] = useState({
    n_name: null,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "n_name") {
      setInputs({ ...inputs, [name]: value });
    } else if (name === "n_status") {
      setInputs({ ...inputs, [name]: event.target.checked });
    }
  };

  const mValitation = (event) => {
    const { value, name } = event.target;
    if (name === "n_name") {
      const bValid = rgxName(value);
      setValidation({ ...validation, [name]: bValid });
    }
  };

  const [category, setCategory] = useState(null);

  const mOnSubmit = async (e) => {
    e.preventDefault();
    const oPost = {
      name: inputs.n_name,
      categories: category.id
    }
    const response = await act_postService(oPost);
    console.log(response);
    xDispatch(act_getAllServices());
    setInputs({ ...inputs, n_name: "" });
    setCategory(null);
    
  };
=================================================
<section className="tblCategory-right">
        <form className="tblCat-r1" onSubmit={mOnSubmit}>
          <FormControlLabel
            label="State"
            control={
              <Switch
                checked={inputs.n_status}
                onChange={handleChange}
                color="success"
              />
            }
            className="tblCat-r1-switch"
            name="n_status"
          />

          <ComboBox category={category} setCategory={setCategory}/>

          <TextField
            variant="standard"
            label="Name"
            name="n_name"
            error={validation.n_name}
            helperText={validation.n_name && "Required"}
            value={inputs.n_name}
            onChange={handleChange}
            onKeyUp={mValitation}
            onBlur={mValitation}
          />

          <Fab color="primary" aria-label="add" size="small" type="submit">
            <AddIcon />
          </Fab>
        </form>
      </section>
*/
