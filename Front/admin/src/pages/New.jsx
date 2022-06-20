import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./styles/New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { PostUser } from "../assets/sources/ApiFunctions";
/* ********************************* */

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const New = ({ pInputForm, title }) => {
  const oInitial = {
    n_name: "",
    n_lastName: "",
    n_email: "",
    n_dpw: "",
    n_phone: "",
    n_password: "",
    n_country: "",
    n_province: "",
  };

  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState(oInitial);
  const [select, setSelect] = useState(null);
  const [status, setStatus] = useState({ on: null, off: null });

  const mSubmit = async (event) => {
    event.preventDefault();
    // console.log("submit", inputs);
    // console.log(file);
    // console.log(status); 
    const response = await PostUser({
      "location": "",
      "email": inputs.n_email,
      "password": inputs.n_password,
      "name": inputs.n_name,
      "last_name": inputs.n_lastName,
      "avatar_image": file,
      "description": "",
      "phone_number": inputs.n_phone,
      "country": inputs.n_country,
      "province_state": inputs.n_province,
      "rol": select,
      "state": status.on ? "Active" : "Inactive",
    });
    console.log(response, "response");
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="iconn" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <GroupSizesColors status={status} setStatus={setStatus} />
          </div>
          <div className="right">
            <form onSubmit={mSubmit}>
              <ComboBox select={select} setSelect={setSelect} />

              {pInputForm.map((pI) => (
                <div className="formInput" key={pI.id}>
                  <label>{pI.label}</label>
                  <input
                    type={pI.type}
                    placeholder={pI.placeholder}
                    name={pI.name}
                    value={inputs[pI.name]}
                    onChange={(e) =>
                      setInputs({ ...inputs, [pI.name]: e.target.value })
                    }
                  />
                </div>
              ))}
              <button type="submit" className="New-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComboBox = ({ select, setSelect }) => {
  const aOptions = ["client", "Seller", "admin"];

  return (
    <Autocomplete
      sx={{ width: "40%", mb: "9px" }}
      options={aOptions}
      autoHighlight
      renderInput={(params) => (
        <TextField {...params} label="User Rol" variant="standard" />
      )}
      value={select}
      onChange={(event, value) => setSelect(value)}
    />
  );
};

const GroupSizesColors = (props) => {
  const { status, setStatus } = props;

  const buttons = [
    <Button
      variant={status.on ? "contained" : "outlined"}
      color="success"
      key="1"
      onClick={() => setStatus({ on: true, off: false })}
    >
      Enabled
    </Button>,
    <Button
      variant={status.off ? "contained" : "outlined"}
      color="error"
      key="2"
      onClick={() => setStatus({ on: false, off: true })}
    >
      Disabled
    </Button>,
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "12px 0",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ButtonGroup size="small">{buttons}</ButtonGroup>
    </div>
  );
};

export default New;

/* 
const defaultProps = {
    options: aOptions,
    getOptionLabel: (option) => option.title,
  };

   <Autocomplete
        {...defaultProps}
*/

/* 

<div style={{width:"40%", display: "flex", placeItems: "flex-start", flexFlow: "row-reverse"}}>

  {
	"location": "",
	"email": "vvvv@asdf.com",
	"password": "123456789",
	"name": "nname",
	"last_name": "lassstname",
	"avatar_image": "https://i.ibb.co/nfPP3tS/OIP.jpg",
	"description": "dessscription",
	"phone_number": "987654321",
	"country": "Peru",
	"province_state": "Lima",
	"rol": "client",
	"state": "Active"
}  
*/
