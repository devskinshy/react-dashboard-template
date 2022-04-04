import {Navigate} from "react-router-dom";
import {INDEX, PATHS} from "./common";
import Home from "../pages/dashboard/Home";
import Keyword from "../pages/dashboard/Keyword";
import Company from "../pages/dashboard/Company";
import Account from "../pages/dashboard/Account";
import {AbcOutlined, BusinessOutlined, HomeOutlined, ManageAccountsOutlined} from "@mui/icons-material";
import Dashboard from "../layouts/Dashboard";
import RoleBasedGuard from "../guards/RoleBasedGuard";

const {dashboard: {root, home, manager, admin}} = PATHS;

export const HEADER_OPTIONS = [
  {
    label: 'Home',
    linkTo: INDEX,
  }
];

export const DASHBOARD_OPTIONS = [
  {
    menu: true, element: <RoleBasedGuard element={<Dashboard/>} roles={root.roles}/>, ...root, children:
    [
      { index: true, element: <Navigate to={home.link()} replace /> },
      { menu: true, icon: <HomeOutlined/>, title: 'home', element: <Home/>, ...home }
    ]
  },
  {
    menu: true, title: 'manager', element: <RoleBasedGuard element={<Dashboard/>} roles={manager.root.roles}/>, ...manager.root, children:
    [
      { index: true, element: <Navigate to={manager.keyword.link()} replace /> },
      { menu: true, icon: <AbcOutlined/>, title: 'keyword', element: <Keyword/>, ...manager.keyword },
      { menu: true, icon: <BusinessOutlined/>, title: 'company', element: <Company/>, ...manager.company }
    ]
  },
  {
    menu: true, title: 'admin', element: <RoleBasedGuard element={<Dashboard/>} roles={admin.root.roles}/>, ...admin.root, children:
    [
      { index: true, element: <Navigate to={admin.account.link()} replace /> },
      { menu: true, icon: <ManageAccountsOutlined/>, title: 'account', element: <Account/>, ...admin.account }
    ]
  }
];