import React from 'react';
import {useDispatch} from "react-redux";
import useResponsive from "../../../hooks/useResponsive";
import useDashboard from "../../../hooks/useDashboard";
import {toggleDesktop} from "../../../redux/modules/dashboard";
import NavBarHeader from "../../../components/layouts/navbar/NavBarHeader";

const NavBarHeaderContainer = (props) => {
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const {isCollapse, isOpenDesktop} = useDashboard();

  const onToggleDesktop = () => {
    dispatch(toggleDesktop());
  }

  return (
    <NavBarHeader
      isDesktop={isDesktop}
      isCollapse={isCollapse}
      isOpenDesktop={isOpenDesktop}
      onToggleDesktop={onToggleDesktop}
      {...props}
    />
  );
};

export default NavBarHeaderContainer;