import React from 'react';
import useAuth from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';
import {INDEX} from "../configs";

const GuestGuard = ({element}) => {
  const {isAuthenticated} = useAuth();

  if(isAuthenticated) {
    return <Navigate to={INDEX} replace/>
  }

  return (
    <>
      {element}
    </>
  );
};

export default GuestGuard;