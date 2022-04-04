import React from 'react';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

const DividerStyle = styled(Box)({
  flexGrow: 1
})

const GrowDivider = () => {
  return <DividerStyle/>;
};

export default GrowDivider;