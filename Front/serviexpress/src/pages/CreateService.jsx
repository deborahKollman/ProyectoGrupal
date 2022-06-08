import React from "react";
import { MySelect } from "../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import { MultiImgs } from "../components/UploadImg";
import BurgerButton from "../components/NavBar/NavBar";
import './styles/CreateService.scss';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const CreateService = () => {
  return (
    <div className="page-createService">
      <BurgerButton />

      <section className="createService-content">
        <h1>Service Info</h1>

        <MySelect />
        <MySelect />

        <MyTextField
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          id="outlined-multiline-static"
          label="DESCRIPTION"
          multiline
          rows={4}
          placeholder="Tell us about your business"
        />

        <MyTextField
          required
          sx={{
            fieldset: {
              borderColor: "#fcdc3c !important",
            },
          }}
          label="MIN PRICE"
          type="number"
          value={1}
          onChange={(e) => {
            console.log("object");
          }}
        />

        <MultiImgs />
        
        <MyButtonTwo variant="contained" endIcon={<LibraryAddIcon />}>
            Save Service
          </MyButtonTwo>

      </section>
    </div>
  );
};

export default CreateService;
/* 
          onChange={() => {
            console.log("object");
          }} */
