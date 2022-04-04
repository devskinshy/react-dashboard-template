import {publicClient} from "../utils/client";

export const getToken = (refreshToken) => publicClient.post('/v1/auth/gettoken', {refreshToken});

export const initialize = (refreshToken) => publicClient.post('/v1/auth/gettoken', {}, {headers: {Authorization: `Bearer ${refreshToken}`}})
export const login = ({email, password}) => publicClient.post('/v1/auth/signin', {email, password});
