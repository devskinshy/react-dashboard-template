import React from 'react';
import {NavSectionHorizontal} from "../../../../components/layouts/navbar/modules";
import useAuth from "../../../../hooks/useAuth";

const NavSectionHorizontalContainer = () => {
  const {user} = useAuth()

  return <NavSectionHorizontal user={user}/>;
};

export default NavSectionHorizontalContainer;