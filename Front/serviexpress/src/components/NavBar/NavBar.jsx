import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {
  MyHeader,
  ListNav,
  StyledBurger,
  MyNav
} from "./NavBar-StyleComp";
import SearchGroup from "../SearchGroup";
import AccountMenu from "./AcountMenu";

const logo = require("../../assets/icons/log.png");
const BurgerButton = () => {
  const [open, setOpen] = useState(false);

  const mReloadOpen = () => {
    setOpen(!open);
  };

  return (
    <MyHeader pOpen={open}>
      <div className="initial">
        <figure>
          <img src={logo} alt="" />
        </figure>

        <IconButton className="burgerFigure"  onClick={mReloadOpen}>
          <StyledBurger pOpen={open}>
            <span></span>
            <span></span>
            <span></span>
          </StyledBurger>
        </IconButton>
      </div>

     <SearchGroup  />


    <div className="NavBar-login_user">
      <MyNav>
        <ol>
          <li>
            <FavoriteBorderIcon/>
          </li>
          <li>
            <NotificationsActiveIcon/>
          </li>
          <li>
            <LocalMallIcon/>
          </li>
        </ol>
      </MyNav>

      

      <AccountMenu/>
      </div>
      
      <ListNav pOpen={open}>
        <li>
          <Link to="/" onClick={mReloadOpen}>
            Landing Page
          </Link>
        </li>
        <li>
          <Link to="/home" onClick={mReloadOpen}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/c_recipeA" onClick={mReloadOpen}>
            Un Link
          </Link>
        </li>
      </ListNav>
      {/* <MyButton variant="contained" endIcon={<VolunteerActivismIcon />}>
        Join Serviexpress
      </MyButton> */}
      
    </MyHeader>
  );
};

export default BurgerButton;

//---------------------------------------------------------------------------
//-----------------------------STYLED COMPONENTS-----------------------------
//---------------------------------------------------------------------------
