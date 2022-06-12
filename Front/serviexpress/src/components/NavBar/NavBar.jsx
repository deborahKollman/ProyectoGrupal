import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { MyHeader, ListNav, StyledBurger, MyNav } from "./NavBar-StyleComp";
import SearchGroup from "../SearchGroup";
import AccountMenu from "./MUI-AcountMenu";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/action";
import NavigationBar from "../NavigationBar";

const logo = require("../../assets/icons/log.png");

//=>=>=>=>==>=>=>=>=>==> COMPONENT -------------------------
const BurgerButton = () => {

  const xDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const mReloadOpen = () => {
    setOpen(!open);
  };

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      console.log(user);
      if (user?.photos) {
        setAvatar(user.photos[0].value);
      } else {
        setAvatar("https://cdn-icons-png.flaticon.com/512/107/107831.png");
      }
    } else {
      xDispatch(getUser());
    }
  }, [xDispatch, avatar, user]);


  const { rdcr_isAuth } = useSelector((state) => state);
  const mLoginTemp = () => {
    console.log("rdcr_isAuth",rdcr_isAuth);
  }

  return (
    <MyHeader pOpen={open}>
      <div className="initial">
        <Link to={`/Home`}>
          <figure>
            <img src={logo} alt="" />
          </figure>
        </Link>

        <IconButton className="burgerFigure" onClick={mReloadOpen}>
          <StyledBurger pOpen={open}>
            <span></span>
            <span></span>
            <span></span>
          </StyledBurger>
        </IconButton>
      </div>

      <SearchGroup />

      <div className="NavBar-login_user">
        <MyNav>
          <ol>
            <li>
              <IconButton aria-label="delete" size="large"
                onClick={mLoginTemp}
              >
                <Favorite />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="delete" size="large">
                <NotificationsActiveIcon />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="delete" size="large">
                <LocalMallIcon />
              </IconButton>
            </li>
          </ol>
        </MyNav>
        {avatar ? (
          <img
            src={avatar}
            alt={avatar}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          ></img>
        ) : (
          <AccountMenu />
        )}
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
      
      <NavigationBar/>

    </MyHeader>
  );
};

export default BurgerButton;

//---------------------------------------------------------------------------
//-----------------------------STYLED COMPONENTS-----------------------------
//---------------------------------------------------------------------------
/* 
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            
            */
