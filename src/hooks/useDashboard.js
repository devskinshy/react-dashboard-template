import {useSelector} from "react-redux";

const UseDashboard = () => {
  const {isSlide, isOpenDesktop, isOpenMobile} = useSelector(({dashboard}) => ({
    isSlide: dashboard.desktop.hover,
    isOpenDesktop: dashboard.desktop.toggle,
    isOpenMobile: dashboard.mobile.toggle
  }));

  return {
    isCollapse: !isOpenDesktop && !isSlide,
    isSlide,
    isOpenDesktop,
    isOpenMobile
  };
};

export default UseDashboard;