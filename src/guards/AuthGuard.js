import React from 'react';
import useAuth from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';
import {LOGIN} from "../configs";

const AuthGuard = ({element}) => {
  const {isAuthenticated} = useAuth();

  if(!isAuthenticated) {
    return <Navigate to={LOGIN} replace />
  }

  return (
    <>
      {element}
    </>
  );
};

export default AuthGuard;