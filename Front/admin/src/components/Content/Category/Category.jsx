import "../../styles/Datatable.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_getAllCategories, act_getAllUsers } from "../../../redux/action";

import { userColumns, categoriesColumns } from "../FormatTable";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { rgxName } from "../../../assets/sources/RegExp";
import { act_postCategory, act_deleteCategory } from "../../../redux/action";
import BasicModal from "./Modal";

const TableCategory = ({ pType }) => {
  let fAction;
  let aRows = [];
  let aPersonalColumns = [];
  const [modal, setModal] = useState({active: false, id: null})

  const oStatesOfRdcr = useSelector((state) => state);

  switch (pType) {
    case "USER":
      fAction = act_getAllUsers;
      aRows = oStatesOfRdcr.rdcr_users;
      aPersonalColumns = userColumns;
      break;
    case "CATEGORY":
      fAction = act_getAllCategories;
      aRows = oStatesOfRdcr.rdcr_categories;
      aPersonalColumns = categoriesColumns;
      break;
    default:
      break;
  }

  const xDispatch = useDispatch();
  useEffect(() => {
    xDispatch(fAction());
  }, [xDispatch, fAction, pType, modal]);

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
    xDispatch(act_deleteCategory(pId))
    .then(() => {
      xDispatch(fAction());
    })
  }

  const handleModify = (pId) => {
    setModal({active: true, id: pId});
    console.log(pId);
  }

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
  const mOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit",validation.n_name);
    if (!validation.n_name) {
      const oSubmit = {
        name: inputs.n_name,
      };

      xDispatch(act_postCategory(oSubmit))
      .then(() => {
        xDispatch(fAction());
      });
      setInputs({
        n_name: "",
        n_status: true,
      });
    }
  };
  return (
    <div className="comp-tableCategory">
      <BasicModal pModal={modal} pSetModal={setModal}/>
      <section className="tblCategory-left">
        LIST OF {pType.toUpperCase()}
        <DataGrid
          sx={{ width: "346px", height: "76vh" }}
          className="datagrid"
          rows={aRows}
          columns={aPersonalColumns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
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

export { TableCategory };

/* 
<Link to="/users/new" className="link">
          Add New
        </Link>

import { aFormCategory } from "../../assets/sources/FormOne";
        
          {
            aFormCategory.map((item, index) => {
              return (
                <div className="mb-3" key={index}>
                  <label htmlFor={item.id} className="form-label">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    className="form-control"
                    id={item.id}
                    aria-describedby="emailHelp"
                  />
                </div>
              );
            })
          }
*/
