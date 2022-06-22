import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import React from "react";

const FloatingButton = () => {
  return (
    <Fab
      variant="extended"
      color="default"
      aria-label="add"
      sx={{
        m: 4,
        position: "absolute",
        left: 1,
        bottom: 1,
        background: "#fcdc3c",
      }}
    >
      <AddIcon sx={{ mr: 1 }} />
      Add Publication
    </Fab>
  );
};

export default FloatingButton;
