import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import "./styles/UploadImg.scss";
import MediaCard from "../elements/CardMUI";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const img = require("../assets/icons/star.png");

const UploadImg = () => {
  return (
    <section className="comp-upload_img">
      <figure>
        <img src={img} alt="" />
      </figure>

      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera sx={{ color: 'black', width: 32, height: 32 }} />
        </IconButton>
      </label>
    </section>
  );
};

const MultiImgs = () => {
  return (
    <section className="comp-multiImgs">      
      <label htmlFor="contained-button-file" className="cmp-MultiImgs-label">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
      </label>

      <MediaCard/>

    </section>
  );
}

export {
  UploadImg,
  MultiImgs
};

const Input = styled("input")({
  display: "none",
});
