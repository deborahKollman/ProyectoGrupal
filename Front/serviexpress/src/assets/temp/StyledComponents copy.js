import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

const StyleMUI = require("@mui/material/styles").styled;

const MyHeader = styled.header`
  * {
    margin: 0;
  }
  padding: 0 4vw;
  .burgerFigure {
    display: none;
  }
  background-color: #fcdc3c;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #f0ce77;
  
  .initial {
      height: 10vh;
      align-items: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  @media (max-width: 500px) {
    align-items: normal;
    flex-flow: column nowrap;
    .burgerFigure {
      display: flex;
    }
    z-index: 3;
    height: ${({ pOpen }) => (!pOpen ? "12vh" : "100%")};
    clip-path: ${({ pOpen }) =>
      !pOpen ? "none" : "polygon(0 0, 100% 0, 100% 100%, 30% 100%);"};

    position: ${({ pOpen }) => (!pOpen ? "inherit" : "absolute")};
  }
`;
//===============================================================

const ListNav = styled.ul`
  display: flex;
  padding: 0;
  flex-flow: row wrap;
  list-style: none;
  text-align: right;
  li {
    text-decoration: none;
    align-self: center;
    margin-left: 12px;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
  .active {
    background-color: #aaa;
  }

  @media (max-width: 500px) {
    display: ${({ pOpen }) => (!pOpen && "none")};
    transform: ${({ pOpen }) => (pOpen ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: white;
      align-self: end;
    }
  }
`;
//===============================================================
const StyledBurger = styled.figure`
  width: 2rem;
  height: 2rem;
  /* position: absolute; */
  top: 0px;
  right: 0px;

  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ pOpen }) => (pOpen ? "#63451d" : "#3C2F1E")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ pOpen }) => (pOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ pOpen }) => (pOpen ? "traslate(100%)" : "traslateX(0)")};
      opacity: ${({ pOpen }) => (pOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ pOpen }) => (pOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

//export components of style-components


const Search = StyleMUI("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  minWidth: "30vw",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = StyleMUI("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = StyleMUI(InputBase)(({ theme }) => ({
  width: "80%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

/* 
import SearchIcon from "@mui/icons-material/Search";
  {Search,
  SearchIconWrapper,
  StyledInputBase,}

 <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <button>Search</button>
      </Search>


*/