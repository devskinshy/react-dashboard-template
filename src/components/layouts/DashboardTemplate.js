import React from 'react';
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

const RootStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isVertical'
})(({isVertical, theme}) => ({
  ...(!isVertical && {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      minHeight: theme.spacing(1),
    },
  })
}));

const DashboardTemplate = ({isVertical, children}) => {
  return (
    <RootStyle isVertical={isVertical}>
      {children}
    </RootStyle>
  );
};

export default DashboardTemplate;