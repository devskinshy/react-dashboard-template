import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import useAuth from "../hooks/useAuth";
import {initialize} from "../redux/modules/auth";
import LoadingScreen from "../components/common/LoadingScreen";

const AuthPreset = ({children}) => {
  const dispatch = useDispatch();
  const {isInitialized} = useAuth();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  if(!isInitialized) {
    return <LoadingScreen/>;
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthPreset;