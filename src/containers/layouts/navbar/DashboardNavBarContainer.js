import React from 'react';
import useResponsive from "../../../hooks/useResponsive";
import useSetting from "../../../hooks/useSetting";
import useDashboard from "../../../hooks/useDashboard";
import DashboardNavBar from "../../../components/layouts/navbar/DashboardNavBar";

const DashboardNavBarContainer = (props) => {
  const isDesktop = useResponsive('up', 'lg');
  const {isVertical} = useSetting();
  const {isCollapse, isOpenDesktop} = useDashboard();

  return (
    <DashboardNavBar
      isVertical={isVertical}
      isDesktop={isDesktop}
      isCollapse={isCollapse}
      isOpenDesktop={isOpenDesktop}
      {...props}
    />
  )
};

export default DashboardNavBarContainer;