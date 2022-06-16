import "./styles/Navbar.scss";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { act_themeTogle } from "../redux/action";
import { useDispatch } from "react-redux";

const Navbar = () => {

  const xDispatch = useDispatch();


  return (
    <div className="navbarr">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchIcon />
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          English
        </div>
        <div className="item">
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => xDispatch(act_themeTogle())}
          />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img
            src="https://i.ibb.co/nfPP3tS/OIP.jpg"
            alt="bby-tiger"
            className="avatar"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
/* 

// import { DarkModeContext } from "../context/darkModeReducer";
// import { useContext } from "react";


  const {dispatch} = useContext(DarkModeContext);
*/
 