import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { act_getOneCategory } from "../../redux/action";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import TextField from "@mui/material/TextField";

import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { rgxName } from "../../assets/sources/RegExp";
import { act_putCategory } from "../../assets/sources/ApiFunctions";

export default function BasicModal({ pModal, pSetModal }) {
  const handleClose = () => pSetModal({ active: false, pId: null });

  const [inputs, setInputs] = useState({
    n_name: "",
    n_status: true,
  });

  useEffect(() => {
    if (pModal.active) {
      console.log("pModal.active", pModal.id);
      (async () => {
        const x = await act_getOneCategory(pModal.id);
        console.log("x", x);
        setInputs({
          ...inputs,
          n_name: x.name,
        });
      })();
    }
  }, [pModal]);

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

  //   const xDispatch = useDispatch();
  const mOnSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", validation.n_name);
    if (!validation.n_name) {
      const oSubmit = {
        name: inputs.n_name,
      };
      const response = await act_putCategory(pModal.id, oSubmit);
      console.log("response", response);
      handleClose();
    }
  };
  return (
    <Modal
      open={pModal.active}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <MyForm className="tblCat-r1" onSubmit={mOnSubmit}>
          <div className="r1-header">
            <h4 disabled>
              <b>Category: </b>
              {pModal.id}
            </h4>
            <FormControlLabel
              label="State"
              control={
                <Switch
                  checked={inputs.n_status}
                  onChange={handleChange}
                  color="success"
                />
              }
              name="n_status"
            />
          </div>
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

          <Fab color="warning" size="small" type="submit">
            <EditIcon />
          </Fab>
        </MyForm>
      </Box>
    </Modal>
  );
}

const MyForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 17px;
  .r1-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
/* 
import Typography from "@mui/material/Typography";
<Typography id="modal-modal-title" variant="h6" component="h2">
    Text in a modal
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
</Typography>
*/
