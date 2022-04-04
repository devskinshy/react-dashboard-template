import React from 'react';
import {Stack} from "@mui/material";

const HeaderContent = ({children}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
      {children}
    </Stack>
  );
};

export default HeaderContent;