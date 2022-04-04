import axios from "axios";
import {applyAuthTokenInterceptor} from "axios-jwt";
import {BASE_URL} from '../configs';
import {getToken} from "../api/auth";

export const publicClient = axios.create({
  baseURL: BASE_URL
});

export const privateClient = axios.create({
  baseURL: BASE_URL
});
const requestRefresh = async (refreshToken) => {
  const response = await getToken(refreshToken);

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  }
}

applyAuthTokenInterceptor(privateClient, { requestRefresh });