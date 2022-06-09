
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
const StyleMUI = require("@mui/material/styles").styled;

const MyTextField = styled(TextField)({
    'margin-top': '40px',
    'width': '260px',
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FCDC3C',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FCDC3C',
    },
  },
});

const MyButton = StyleMUI(Button)({
  width: "130px",
  backgroundColor: "transparent",
  margin: "30px 10px",
  boxShadow: "0 0 0 0.2rem #FCDC3C",

  "&:hover": {
    backgroundColor: "#FCDC3C",
    borderColor: "#FCDC3C",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#FCDC3C",
    borderColor: "#FCDC3C",
  },
  "&:focus": {
    color: "black",
  },
  a:{
    fontSize: "1.2rem",
    color: "black",
    fontWeight: "bold",
  }
});

const MyButtonTwo = StyleMUI(Button)({
  width: '130px',
  color: '#000',
  fontWeight: 'bold',
  backgroundColor: '#fcdc3c',
  margin: '30px 40px',
    '&:hover': {
      backgroundColor: '#000',
      borderColor: '#000',
      boxShadow: 'none',
      color: '#fcdc3c'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#000',
      borderColor: '#000',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem #ff51007f',
      color: '#fff'
    },
});

const MyButtonThree = StyleMUI(Button)({
  width: '260px',
  color: '#000',
  fontWeight: 'bold',
  backgroundColor: '#fcdc3c',
  marginTop: '30px',
    '&:hover': {
      backgroundColor: '#000',
      borderColor: '#000',
      boxShadow: 'none',
      color: '#fcdc3c'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#000',
      borderColor: '#000',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem #ff51007f',
      color: '#fff'
    },
});

  

export {
    MyTextField,
    MyButton,
    MyButtonTwo,
    MyButtonThree,
}