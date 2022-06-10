import React, { useState } from "react";
import { MySelect, MySelectTwo } from "../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import { MultiImgs } from "../components/UploadImg";
import BurgerButton from "../components/NavBar/NavBar";
import "./styles/CreateService.scss";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const CATEGORY = require("../assets/database/CATEGORY.json");
const SUBCATEGORY = require("../assets/database/SUBCATEGORY.json");

const CreateService = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="page-createService">
      <BurgerButton />

      <section className="createService-content">
        <h1>Service Info</h1>

        <MySelect
          aFirst={CATEGORY}
          pHandleChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <MySelectTwo
          aSecond={SUBCATEGORY}
          pHandleChange={(e) => {
            setSubcategory(e.target.value);
          }}
          pDad={category}
        />

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
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          InputLabelProps={{ shrink: true, min: "0", max: "100" }}
          inputProps={{ min: "0", max: "9999", inputMode: 'numeric', pattern: '[0-9]*' }}
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
/* 

// import { useDispatch, useSelector } from 'react-redux';
// import {getAllCategories} from '../redux/action'


  const xDispatch = useDispatch();

  useEffect(() => {
      xDispatch(getAllCategories());
  }, [xDispatch])

  const {rdcr_categories} = useSelector(state => state);

  console.log(rdcr_categories);
*/