import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error
  } = useSelector(({loading, auth}) => ({
    loading: loading['auth/LOGIN'],
    error: auth.error
  }));

  const onSubmit = (form) => {
    const {email, password} = form;
    dispatch(login({email, password}));
  }

  return <AuthForm isSubmitting={loading} onSubmit={onSubmit} error={error}/>;
};

export default LoginForm;