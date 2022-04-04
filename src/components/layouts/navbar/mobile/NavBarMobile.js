import React from 'react';
import {Drawer} from "@mui/material";

const NavBarMobile = ({isDesktop, isOpenMobile, onCloseMobile, children}) => {
  return (!isDesktop) && (
    <Drawer
      open={isOpenMobile}
      onClose={onCloseMobile}
      PaperProps={{
        sx: (theme) => ({
          width: theme.dashboard.NAVBAR.DASHBOARD_WIDTH
        })
    }}>
      {children}
    </Drawer>
  );
};

export default NavBarMobile;