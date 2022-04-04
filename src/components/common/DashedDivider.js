import React from 'react';
import {styled} from "@mui/material/styles";
import {Divider} from "@mui/material";

const DividerStyle = styled(Divider)({
  borderStyle: 'dashed'
});

const DashedDivider = () => {
  return (
    <DividerStyle />
  );
};

export default DashedDivider;