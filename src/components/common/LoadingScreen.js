import React from 'react';
import {Box} from "@mui/material";
import {PacmanLoader} from "react-spinners";

const LoadingScreen = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100vw',
      minHeight: '100vh'
    }}>
      <PacmanLoader color={'#36D7B7'}/>
    </Box>
  );
};

export default LoadingScreen;