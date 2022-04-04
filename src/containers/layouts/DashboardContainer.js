import React, {useEffect} from 'react';
import useSetting from "../../hooks/useSetting";
import useResponsive from "../../hooks/useResponsive";
import {useDispatch} from "react-redux";
import {resetDesktop} from "../../redux/modules/dashboard";
import DashboardTemplate from "../../components/layouts/DashboardTemplate";

const DashboardContainer = (props) => {
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const {isVertical} = useSetting();

  useEffect(() => {
    if(!isDesktop) {
      dispatch(resetDesktop());
    }
  }, [isDesktop]);

  return <DashboardTemplate isVertical={isVertical} {...props}/>;
};

export default DashboardContainer;