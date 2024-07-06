import { createSlice } from '@reduxjs/toolkit';
import { setCookie, getCookie, getOneMonthExpiry } from "../../utils/handleCookie";
import { commonConfig } from "../../utils/config/config";
const initialState=  {
    authUser: getCookie(commonConfig.LOGGEDIN_USER) ? JSON.parse(getCookie(commonConfig.LOGGEDIN_USER)) : null,
    access_token: getCookie(commonConfig.ACCESS_TOKEN) ? getCookie(commonConfig.ACCESS_TOKEN) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { payload } = action;
            if(typeof payload !== "undefined" && payload.code === 200){
                console.log('payload reducer', payload);
                let body = { ...payload.body}
                state.authUser = body;
                state.access_token = body.access_token;
            }
        },
        register: (state, action) => {
            const { payload } = action;
            if(typeof payload !== "undefined" && payload.code === 200){
                console.log('payload reducer', payload);
                let body = { ...payload.body}
                state.authUser = body;
                state.access_token = body.access_token;
            }
        },
        
    }
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;