import React from 'react';
import useAuth from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';
import {isValidRole} from "../utils/jwt";
import {ERROR, LOGIN} from "../configs";

const RoleBasedGuard = ({element, roles}) => {
  const {isAuthenticated, user} = useAuth();

  if(!isAuthenticated) {
    return  <Navigate to={LOGIN} replace/>
  }

  if(!isValidRole(user, roles)) {
    return  <Navigate to={ERROR} replace/>
  }

  return (
    <>
      {element}
    </>
  );
};

export default RoleBasedGuard;