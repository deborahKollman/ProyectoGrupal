import React, { useState } from "react";
import { Link } from "react-router-dom";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import  { MyHeader, ListNav, StyledBurger, MyButton } from "./StyledComponents";
  
const BurgerButton = () => {
  const [open, setOpen] = useState(false);

  const mReloadOpen = () => {
    setOpen(!open);
  };

  return (
    <MyHeader pOpen={open}>
      <StyledBurger pOpen={open} onClick={mReloadOpen} className="burgerFigure">
        <span></span>
        <span></span>
        <span></span>
      </StyledBurger>
      <ListNav pOpen={open}>
        <MyButton 
            variant="contained"
            endIcon={<VolunteerActivismIcon />}>
          Join Serviexpress
        </MyButton>

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
            Create Video Game
          </Link>
        </li>
      </ListNav>
    </MyHeader>
  );
};

export default BurgerButton;

//---------------------------------------------------------------------------
//-----------------------------STYLED COMPONENTS-----------------------------
//---------------------------------------------------------------------------
