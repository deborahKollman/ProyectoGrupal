import React from "react";

import { Button, IconButton } from "@mui/material";
import AccountMenu from "./MUI-AcountMenu";
import Favorite from "@mui/icons-material/Favorite";
import { MyNav } from "./NavBar-StyleComp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";

const InitialSession = () => {
  return (
    <section className="NavBar-register">
      <Link to="/login">
        <Button
          variant="solid"
          color="neutral"
          sx={{
            color: "black",
            fontSize: 16,
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="solid"
          color="neutral"
          sx={{
            color: "black",
            fontSize: 16,
          }}
        >
          Register
        </Button>
      </Link>
    </section>
  );
};

const LoginSession = ({ pAvatar }) => {
  return (
    <div className="NavBar-login_user">
      <MyNav>
        <ol>
          <li>
            <IconButton aria-label="delete" size="large">
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
      {!pAvatar ? (
        <img
          src={pAvatar}
          alt={pAvatar}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        ></img>
      ) : (
        <AccountMenu />
      )}
    </div>
  );
};

export { InitialSession, LoginSession };
