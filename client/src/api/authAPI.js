import axios from 'axios';
export const signup = (body) => axios.post(`auth/signup`, body);

export const login = (body) =>  axios.post(`auth/login`, body);
export const googleLogin = (body) =>  axios.post(`auth/google/callback`, body);

export const userLogin = (body) =>  axios.post(`auth/user-login`, body);
// export const userLogin = (body) =>  axios.post(`mail/tracker`, body);

// export const forgotPassword = (body) =>  axios.post(`auth/forget-password`, body);
// export const doForgotPassword = (body) =>  axios.post(`auth/reset-password`, body);
// export const changePassword = (body) =>  axios.post(`auth/change-password`, body);

// export const verifyOtp = (body) =>  axios.post(`auth/verify-otp`, body);

export const logout = () => axios.post(`auth/logout`);

