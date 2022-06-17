import "../styles/Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "./FormatTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FeedIcon from '@mui/icons-material/Feed';

const Datatable = () => {
  const { rdcr_users } = useSelector((state) => state);

  const actionColumn = [
    {
      field: "action",
      headerName: "ACTIONS",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <IconButton
                color="primary"
                aria-label="delete"
                size="large"
                /* onClick={() => handleDelete(params.row.id)} */
              >
                <FeedIcon fontSize="inherit" />
              </IconButton>
            </Link>

            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              /* onClick={() => handleDelete(params.row.id)} */
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rdcr_users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

/* 
// import { userColumns, userRows } from "../assets/database/datatablesource";

// import { useState } from "react";

  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

              // onClick={() => handleDelete(params.row.id)}

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
*/
