import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { act_logout } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArticleIcon from '@mui/icons-material/Article';
import CollectionsIcon from '@mui/icons-material/Collections';
import {getUser} from '../../redux/action'




export default function AccountMenu({ avatar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector(state => state.user);
  



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const xNavigate = useNavigate();

  const xDispatch = useDispatch();
  const mLogout = () => {
    const baseURL = process.env.REACT_APP_API || 'http://localhost:3001'
    fetch(`${baseURL}/login/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ data: 1 }),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        window.sessionStorage.removeItem("token");
        xDispatch(act_logout());
        xNavigate('/home');
      });
  };

  React.useEffect(() => {
    xDispatch(getUser());



  },[xDispatch])





  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 200,
            height: 250,
            backgroundColor: "#000",
            color: "#fff",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 45,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
           onClick={() => {
            xNavigate(`/profile`);
          }}
        >
          <Avatar src={avatar} />
          Profile
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            xNavigate("/seller/add-service");
          }}
        >
          <ListItemIcon>
            <AttachMoneyIcon fontSize="small" sx={{ color: "#fff" }} />
          </ListItemIcon>
          Sell Service
        </MenuItem>
        <MenuItem
          onClick={() => {
            xNavigate("/myorders");
          }}
        >
          <ListItemIcon>
            <ArticleIcon fontSize="small" sx={{ color: "#fff" }} />
          </ListItemIcon>
          My orders
        </MenuItem>
        <MenuItem
          onClick={() => {
            xNavigate("/seller/add-service");
          }}
        >
          <ListItemIcon>
            <CollectionsIcon fontSize="small" sx={{ color: "#fff" }} />
          </ListItemIcon>
          My publications
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: "#fff" }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={mLogout}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#fff" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
