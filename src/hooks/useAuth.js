import {useSelector} from "react-redux";

const UseAuth = () => {
  const {
    isInitialized,
    isAuthenticated,
    user,
    error
  } = useSelector(({auth}) => ({
    isInitialized: auth.isInitialized,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    error: auth.error
  }));

  return {isInitialized, isAuthenticated, user, error};
};

export default UseAuth;