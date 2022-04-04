import React from 'react';
import {useDispatch} from "react-redux";
import useResponsive from "../../../../hooks/useResponsive";
import useDashboard from "../../../../hooks/useDashboard";
import NavBarMobile from "../../../../components/layouts/navbar/mobile/NavBarMobile";
import {closeMobile} from "../../../../redux/modules/dashboard";

const NavBarMobileContainer = (props) => {
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const {isOpenMobile} = useDashboard();

  const onCloseMobile = () => {
    dispatch(closeMobile());
  }

  return <NavBarMobile
    isDesktop={isDesktop}
    isOpenMobile={isOpenMobile}
    onCloseMobile={onCloseMobile}
    {...props}
  />;
};

export default NavBarMobileContainer;