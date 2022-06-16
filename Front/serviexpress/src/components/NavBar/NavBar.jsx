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
      setAvatar(user.avatar);
    }
  }, [avatar, user]);

  const { rdcr_isAuth } = useSelector((state) => state);

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
