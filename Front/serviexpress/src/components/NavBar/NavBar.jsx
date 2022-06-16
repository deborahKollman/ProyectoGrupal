import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MyHeader, ListNav, StyledBurger } from "./NavBar-StyleComp";
import SearchGroup from "../SearchGroup";

import { useSelector, useDispatch } from "react-redux";
import { getUserr } from "../../redux/action";
import NavigationBar from "./NavigationBar";
import { InitialSession, LoginSession } from "./SubComponents";
import { IconButton } from "@mui/material";

const logo = require("../../assets/icons/log.png");

//=>=>=>=>==>=>=>=>=>==> COMPONENT -------------------------
const BurgerButton = ({ msg }) => {
  const xDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const mReloadOpen = () => {
    setOpen(!open);
  };

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(user)?.length > 0) {
      console.log(user);
      if (user?.photos) {
        setAvatar(user.photos[0].value);
      } else {
        setAvatar("https://cdn-icons-png.flaticon.com/512/107/107831.png");
      }
    } /* else {
      xDispatch(getUserr()); // OJO AL PIOJO xD : POR REVISAR ::
    } */
  }, [ avatar, user, /* xDispatch */]);

  const { rdcr_isAuth } = useSelector((state) => state);
  console.log(rdcr_isAuth, "I'M IN THE NAVBAR");

  console.log(open, "open");
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

      <SearchGroup msg={msg} />

      {!rdcr_isAuth ? <InitialSession /> : <LoginSession pAvatar={avatar} />}

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

      {!open && <NavigationBar />}
    </MyHeader>
  );
};

export default BurgerButton;
