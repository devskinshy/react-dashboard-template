import React from 'react';
import {FormControlLabel, Radio} from "@mui/material";
import {styled} from "@mui/material/styles";

const RootStyle = styled(FormControlLabel)(({theme}) => ({
  margin: theme.spacing(0),
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  position: 'absolute',
}));

const RadioStyle = styled(Radio)({
  display: 'none'
})

const BoxMask = ({value}) => {
  return (
    <RootStyle
      label=""
      value={value}
      control={<RadioStyle />}
    />
  );
};

export default BoxMask;