import React from 'react';
import {Container} from "@mui/material";

const NavBarVertical = ({isDesktop, isVertical, children}) => {
  return (isDesktop && isVertical) && (
    <Container maxWidth={false}>
      {children}
      {/*<NavSectionHorizontal navConfig={navConfig} />*/}
    </Container>
  );
};

export default NavBarVertical;