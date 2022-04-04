import {Navigate} from "react-router-dom";
import {ERROR, INDEX, PATHS} from "./common";
import {DASHBOARD_OPTIONS} from "./dashboard";
import GuestGuard from "../guards/GuestGuard";
import Login from "../pages/auth/Login";
import Error from "../pages/global/error";

const {
  global: {
    root : ROOTS_GLOBAL,
    error
  },
  auth: {
    root : ROOTS_AUTH,
    login
  },
} = PATHS;

export const ROUTES = [
  {
    path: ROOTS_GLOBAL.path,
    children: [

      // root
      { index: true, element: <Navigate to={INDEX} replace /> },
      { path: error.path, element: <Error/> },

      // auth
      {
        path: ROOTS_AUTH.path,
        children: [
          { index: true, element: <Navigate to={ERROR} replace /> },
          { path: login.path, element: <GuestGuard element={<Login/>}/> }
        ]
      },
      // dashboard
      ...DASHBOARD_OPTIONS

    ]
  },
  {path: '*', element: <Navigate to={ERROR} replace />}
];