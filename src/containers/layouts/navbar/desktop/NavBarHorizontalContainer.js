import React from 'react';
import {useDispatch} from "react-redux";
import useResponsive from "../../../../hooks/useResponsive";
import useSetting from "../../../../hooks/useSetting";
import useDashboard from "../../../../hooks/useDashboard";
import {hoverDesktop, leaveDesktop} from "../../../../redux/modules/dashboard";
import NavBarHorizontal from "../../../../components/layouts/navbar/desktop/NavBarHorizontal";

const NavBarHorizontalContainer = (props) => {
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const {isVertical} = useSetting();
  const {isCollapse, isSlide, isOpenDesktop} = useDashboard();

  const onHoverDesktop = () => {
    if(!isOpenDesktop) {
      dispatch(hoverDesktop());
    }
  }

  const onLeaveDesktop = () => {
    dispatch(leaveDesktop());
  }

  return <NavBarHorizontal
    isDesktop={isDesktop}
    isVertical={isVertical}
    isCollapse={isCollapse}
    isSlide={isSlide}
    onHoverDesktop={onHoverDesktop}
    onLeaveDesktop={onLeaveDesktop}
    {...props}
  />;
};

export default NavBarHorizontalContainer;