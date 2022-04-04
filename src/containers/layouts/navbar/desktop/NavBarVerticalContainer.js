import React from 'react';
import useResponsive from "../../../../hooks/useResponsive";
import useSetting from "../../../../hooks/useSetting";
import NavBarVertical from "../../../../components/layouts/navbar/desktop/NavBarVertical";

const NavBarVerticalContainer = (props) => {
  const isDesktop = useResponsive('up', 'lg');
  const {isVertical} = useSetting();

  return <NavBarVertical
    isDesktop={isDesktop}
    isVertical={isVertical}
    {...props}
  />;
};

export default NavBarVerticalContainer;