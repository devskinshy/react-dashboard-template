import React from 'react';
import {Drawer} from "@mui/material";
import {cssStyles} from "../../../../helpers/MUI";

const NavBarHorizontal = ({isDesktop, isVertical, isCollapse, isSlide, onHoverDesktop, onLeaveDesktop, children}) => {
  return (isDesktop && !isVertical) && (
    <Drawer
      open
      variant="persistent"
      onMouseEnter={onHoverDesktop}
      onMouseLeave={onLeaveDesktop}
      PaperProps={{
        sx: (theme) => ({
          width: theme.dashboard.NAVBAR.DASHBOARD_WIDTH,
          borderRightStyle: 'dashed',
          bgcolor: 'background.default',
          transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.standard,
          }),
          ...(isCollapse && {
            width: theme.dashboard.NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
          }),
          ...(isSlide && {
            ...cssStyles(theme).bgBlur(),
            boxShadow: theme.customShadows.z24,
          }),
        }),
      }}
    >
      {children}
    </Drawer>
  );
};

export default NavBarHorizontal;