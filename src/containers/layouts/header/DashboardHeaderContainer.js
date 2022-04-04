import React from 'react';
import useOffSetTop from "../../../hooks/useOffSetTop";
import useSetting from "../../../hooks/useSetting";
import {useDispatch} from "react-redux";
import useResponsive from "../../../hooks/useResponsive";
import useDashboard from "../../../hooks/useDashboard";
import DashboardHeader from "../../../components/layouts/header/DashboardHeader";
import {openMobile} from "../../../redux/modules/dashboard";
import {useTheme} from "@mui/material/styles";

const DashboardHeaderContainer = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const {isVertical} = useSetting();
  const {isCollapse} = useDashboard();

  const isOffset = useOffSetTop(theme.dashboard.HEADER.DASHBOARD_DESKTOP_HEIGHT) && !isVertical;

  const onOpenSidebar = () => {
    dispatch(openMobile())
  }

  return (
    <DashboardHeader
      isOffset={isOffset}
      isDesktop={isDesktop}
      isVertical={isVertical}
      isCollapse={isCollapse}
      onOpenSidebar={onOpenSidebar}
      {...props}
    />
  );
};

export default DashboardHeaderContainer;