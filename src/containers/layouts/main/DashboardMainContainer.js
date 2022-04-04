import React from 'react';
import useSetting from "../../../hooks/useSetting";
import useDashboard from "../../../hooks/useDashboard";
import DashboardMain from "../../../components/layouts/main/DashboardMain";

const DashboardMainContainer = (props) => {
  const {isVertical} = useSetting();
  const {isOpenDesktop} = useDashboard();

  return <DashboardMain isVertical={isVertical} isOpenDesktop={isOpenDesktop} {...props}/>;
};

export default DashboardMainContainer;