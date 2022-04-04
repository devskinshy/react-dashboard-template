import React from 'react';
import useAuth from "../../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/modules/auth";
import AccountPopover from "../../../components/layouts/header/AccountPopover";

const AccountPopoverContainer = (props) => {
  const dispatch = useDispatch();
  const {user} = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  }

  return <AccountPopover user={user} handleLogout={handleLogout} {...props}/>;
};

export default AccountPopoverContainer;