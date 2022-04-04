import React from 'react';
import {NavSectionVertical} from "../../../../components/layouts/navbar/modules";
import useDashboard from "../../../../hooks/useDashboard";
import useAuth from "../../../../hooks/useAuth";

const NavSectionVerticalContainer = () => {
  const {user} = useAuth()
  const { isCollapse } = useDashboard();

  return <NavSectionVertical user={user} isCollapse={isCollapse}/>;
};

export default NavSectionVerticalContainer;