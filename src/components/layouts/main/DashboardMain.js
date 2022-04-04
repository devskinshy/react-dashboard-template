import React from 'react';
import {Outlet} from "react-router-dom";
import {styled} from "@mui/material/styles";

const RootStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isVertical' && prop !== 'isOpenDesktop'
})(({isVertical, isOpenDesktop, theme}) => (
  !isVertical
    ? {
      flexGrow: 1,
      paddingTop: theme.dashboard.HEADER.MOBILE_HEIGHT + 24,
      paddingBottom: theme.dashboard.HEADER.MOBILE_HEIGHT + 24,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        paddingBottom: theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        width: `calc(100% - ${theme.dashboard.NAVBAR.DASHBOARD_WIDTH}px)`,
        transition: theme.transitions.create('margin-left', {
          duration: theme.transitions.duration.shorter,
        }),
        ...(!isOpenDesktop && {
          marginLeft: theme.dashboard.NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
        }),
      },
    } : {
      [theme.breakpoints.up('xs')]: {
        paddingTop: theme.dashboard.HEADER.MOBILE_HEIGHT + 24,
        paddingBottom: theme.dashboard.HEADER.MOBILE_HEIGHT + 24
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT + 80,
        paddingBottom: theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    }
));

const DashboardMain = ({isVertical, isOpenDesktop}) => {
  return (
    <RootStyle isVertical={isVertical} isOpenDesktop={isOpenDesktop}>
      <Outlet />
    </RootStyle>
  );
};

export default DashboardMain;