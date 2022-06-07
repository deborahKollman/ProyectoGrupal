import styled from "styled-components";
import Button from "@mui/material/Button";
const StyleMUI = require("@mui/material/styles").styled;

const MyHeader = styled.header`
  .burgerFigure {
    display: none;
  }
  background-color: #fcdc3c;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: end;
  border-bottom: 3px solid #f0ce77;
  @media (max-width: 500px) {
    .burgerFigure {
      display: flex;
    }
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 3;
    width: ${({ pOpen }) => (!pOpen ? "79px" : "100%")};
    height: ${({ pOpen }) => (!pOpen ? "79px" : "100%")};
    clip-path: ${({ pOpen }) =>
      !pOpen
        ? "polygon(0 0, 100% 100%, 100% 0);"
        : "polygon(0 0, 100% 0, 100% 100%, 30% 100%);"};
  }
`;
//===============================================================

const ListNav = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  list-style: none;
  text-align: right;
  li {
    text-decoration: none;
    padding: 10px 20px;
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
    transform: ${({ pOpen }) => (pOpen ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: white;
    }
  }
`;
//===============================================================
const StyledBurger = styled.figure`
  margin: 10px;
  width: 2rem;
  height: 2rem;
  position: absolute;
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

const MyButton = StyleMUI(Button)({
  width: "130px",
  color: "#fff",
  backgroundColor: "#3C2F1E",
  margin: "4px 40px",
  "&:hover": {
    backgroundColor: "#3C2F1E",
    borderColor: "#3C2F1E",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#3C2F1E",
    borderColor: "#3C2F1E",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #ff51007f",
    color: "#ff51007f",
  },
});

//export components of style-components
export { MyHeader, ListNav, StyledBurger, MyButton };
