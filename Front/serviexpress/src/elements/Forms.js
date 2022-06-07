
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

const MyTextField = styled(TextField)({
    'margin': '40px',
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

export {
    MyTextField,
}