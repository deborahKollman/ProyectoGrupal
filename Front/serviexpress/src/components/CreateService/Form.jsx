import React, { useEffect, useState } from "react";
import { MySelect, MySelectTwo } from "../../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../../elements/Forms";
import { MultiImgs } from "../UploadImg";
import "./Styles.scss";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useDispatch, useSelector } from 'react-redux';
import {jalz_getAllCategories, createPublication} from '../../redux/action'

const CATEGORY = require("../../assets/database/CATEGORY.json");
const SUBCATEGORY = require("../../assets/database/SUBCATEGORY.json");

const Form = () => {
    const [name, setName] = useState("");
    const [Detail, setDetail] = useState("");
    const [SomeDetail, setSomeDetail] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [price, setPrice] = useState("");
    const [pictures, setImage] = useState(null);
  
    
    const xDispatch = useDispatch();
  
    useEffect(() => {
        xDispatch(jalz_getAllCategories());
    }, [xDispatch])
  
    const {rdcr_categories, rdcr_user } = useSelector(state => state);
    console.log(rdcr_user);

    const aCategories = rdcr_categories?.map(pI => {
        return {
          id: pI.id,
          name: pI.name
        };
      })
    
      const aServices = (rdcr_categories?.map(pII => {
        const x = pII.services
        const oServices = x.map(pIII => {
          return {
            id: pIII.id,
            name: pIII.name,
            fk_category: pII.id
          }
        })
        return oServices
      })).flat();
    
      const mSubmit = async (e) => {
        e.preventDefault();
        const data = {
          title: name,
          detail: Detail,
          detail_resume: SomeDetail,
          price,
          pictures,
          categoryId : category,
          usr_id : 1
        };
        xDispatch(createPublication(data));
        
        alert("Publication created");
      }

  return (
    <form 
    onSubmit={mSubmit}
    className="createService-content">

    <h1>Service Info</h1>
    
    <MyTextField
      sx={{
        fieldset: {
          borderColor: "#fcdc3c !important",
        },
      }}
      label="NAME"
      placeholder="Name of service"
      value={name}
      onChange={e => setName(e.target.value)}
    />

    <MySelect
      aFirst={aCategories}
      pHandleChange={(e) => {
        setCategory(e.target.value);
      }}
    />
    <MySelectTwo
      aSecond={aServices}
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

    <MultiImgs 
      pStateImage= {pictures}
      pSetStateImage= {setImage}
    />

    <MyButtonTwo type="submit" variant="contained" endIcon={<LibraryAddIcon />}>
      Save Service
    </MyButtonTwo>
  </form>
  )
}

export default Form