import React from 'react';
import {styled} from "@mui/material/styles";
import {AppBar} from "@mui/material";

const MainRootStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOpenDesktop'
})(({ isCollapse, isOpenDesktop, theme }) => ({
  [theme.breakpoints.up('lg')]: {
    width: isCollapse ? theme.dashboard.NAVBAR.DASHBOARD_COLLAPSE_WIDTH : theme.dashboard.NAVBAR.DASHBOARD_WIDTH,
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  ...(!isOpenDesktop && {
    position: 'absolute',
  })
}));

const VerticalRootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  top: theme.dashboard.HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}));

const DashboardNavBar = ({isDesktop, isVertical, isCollapse, isOpenDesktop, children}) => {
  return (isDesktop && isVertical)
    ? (
      <VerticalRootStyle>
        {children}
      </VerticalRootStyle>
    )
    : (
      <MainRootStyle isCollapse={isCollapse} isOpenDesktop={isOpenDesktop}>
        {children}
      </MainRootStyle>
    );
};

export default DashboardNavBar;