import jwtDecode from "jwt-decode";
import {clearAuthTokens, setAuthTokens, } from "axios-jwt";

export const setToken = ({access_token, refresh_token}) => {
  setAuthTokens({
    accessToken: access_token,
    refreshToken: refresh_token
  });
}

export const clearToken = () => {
  clearAuthTokens();
}

export const getUser = (accessToken) => {
  if(!accessToken) return null;

  const { sub, groups, cn, cc } = jwtDecode(accessToken);
  return {id: sub, groups, cn, cc};
}

export const isValidToken = (accessToken) => {
  if (!accessToken) return false;

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const isValidRole = (user, roles = []) => {
  return roles.includes(user.groups[0]);
}