import React from 'react';
import {styled} from "@mui/material/styles";
import {Scrollbar} from "../../../helpers/simplebar";

const RootStyle = styled(Scrollbar)({
  height: '100%',
  '& .simplebar-content': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
});

const NavBarScrollBar = ({children}) => {
  return (
    <RootStyle>
      {children}
    </RootStyle>
  );
};

export default NavBarScrollBar;