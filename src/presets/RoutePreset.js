import React from 'react';
import {useRoutes} from "react-router-dom";
import {ROUTES} from "../configs";

const RoutePreset = () => {
  return (
    <>
      {useRoutes(ROUTES)}
    </>
  )
}

export default RoutePreset;