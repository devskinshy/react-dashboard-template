import React from 'react';
import {styled} from "@mui/material/styles";
import {AppBar, Toolbar} from "@mui/material";
import {cssStyles} from "../../../helpers/MUI";
import Logo from "../Logo";
import {IconButtonAnimate} from "../../../helpers/animate";
import {Iconify} from "../../../helpers/iconify";

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'isVertical',
})(({ isCollapse, isOffset, isVertical, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: theme.dashboard.HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${theme.dashboard.NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${theme.dashboard.NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: theme.dashboard.HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(isVertical && {
      width: '100%',
      height: theme.dashboard.HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

const ContentWrapperStyle = styled(Toolbar)(({theme}) => ({
  minHeight: '100% !important',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  }
}))

const LogoStyle = styled(Logo)(({theme})=>({
  marginRight: theme.spacing(2.5)
}));

const IconButtonStyle = styled(IconButtonAnimate)(({theme}) => ({
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary
}))

const DashboardHeader = ({isOffset, isDesktop, isCollapse, isVertical, onOpenSidebar, children}) => {
  return (
    <RootStyle isOffset={isOffset} isCollapse={isCollapse} isVertical={isVertical}>
      <ContentWrapperStyle>

        {isDesktop && isVertical && <LogoStyle/>}

        {!isDesktop && (
          <IconButtonStyle onClick={onOpenSidebar} >
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonStyle>
        )}

        {children}
      </ContentWrapperStyle>
    </RootStyle>
  );
};

export default DashboardHeader;