import "../../styles/Datatable.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { servicesColumns } from "../FormatTable";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { rgxName } from "../../../assets/sources/RegExp";
import { act_getAllServices } from "../../../redux/action";
import BasicModal from "./Modal";
import { Autocomplete, Toolbar, Tooltip, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { act_getAllCategories, act_clearServices } from "../../../redux/action";
import {act_postService } from '../../../assets/sources/ApiFunctions';
import { ComboBoxFilter } from "./ComboBox";

const ComboBox = ({category, setCategory}) => {
  
  const xDispatch = useDispatch();

  useEffect(() => {
    xDispatch(act_getAllCategories());
  }, [xDispatch]);

  const {rdcr_categories} = useSelector((state) => state);

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
    xDispatch(act_clearServices());
    setCategory(null);
  }

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
          <ComboBoxFilter category={category} setCategory={setCategory}/>
        </div>
      )}
    </section>
  );
};

const MainService = () => {
  const [modal, setModal] = useState({ active: false, id: null });

  const { rdcr_services } = useSelector((state) => state);
  console.log(rdcr_services);

  const xDispatch = useDispatch();
  useEffect(() => {
    xDispatch(act_getAllServices());
  }, [xDispatch, modal]);

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

  const handleDelete = (pId) => {
    // xDispatch(act_deleteCategory(pId))
    // .then(() => {
    //   xDispatch(fAction());
    // })
  };

  const handleModify = (pId) => {
    setModal({ active: true, id: pId });
    // console.log(pId);
  };

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
              color="warning"
              aria-label="Modify"
              size="large"
              onClick={() => handleModify(params.row.id)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            {/* </Link> */}

            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
    },
  ];
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
  };

  const [filter, setFilter] = useState(false);

  return (
    <div className="comp-tableCategory">
      <BasicModal pModal={modal} pSetModal={setModal} />
      <section className="tblCategory-left">
        <EnhancedTableToolbar filter={filter} setFilter={setFilter} />

        <DataGrid
          sx={{ width: "346px" }}
          className="datagrid"
          rows={rdcr_services}
          columns={servicesColumns.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          // checkboxSelection
        />
      </section>
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
    </div>
  );
};

export { MainService };


/* 
e.preventDefault();
    console.log("submit", validation.n_name);
    if (!validation.n_name) {
      const oSubmit = {
        name: inputs.n_name,
      };

      // xDispatch(act_postCategory(oSubmit))
      // .then(() => {
      //   xDispatch(fAction());
      // });
      setInputs({
        n_name: "",
        n_status: true,
      });
    }
*/