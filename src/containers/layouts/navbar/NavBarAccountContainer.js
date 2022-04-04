import React from 'react';
import useDashboard from "../../../hooks/useDashboard";
import useAuth from "../../../hooks/useAuth";
import NavBarAccount from "../../../components/layouts/navbar/NavBarAccount";

const NavBarAccountContainer = (props) => {
  const {user} = useAuth();
  const {isCollapse} = useDashboard();

  return (
    <NavBarAccount user={user} isCollapse={isCollapse} {...props}/>
  );
};

export default NavBarAccountContainer;