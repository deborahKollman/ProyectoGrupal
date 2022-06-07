
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
const StyleMUI = require("@mui/material/styles").styled;

const MyTextField = styled(TextField)({
    'margin': '40px',
    'width': '300px',
  '& label.Mui-focused': {
    color: '#FCDC3C',
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
  color: "#fff",
  backgroundColor: "transparent",
  margin: "4px 40px",
  boxShadow: "0 0 0 0.2rem #3C2F1E",

  "&:hover": {
    backgroundColor: "#3C2F1E",
    borderColor: "#3C2F1E",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#3C2F1E",
    borderColor: "#3C2F1E",
  },
  "&:focus": {
    color: "black",
  },
});

export {
    MyTextField,
    MyButton
}