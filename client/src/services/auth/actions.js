import * as api from "../../api/authAPI";
import { setCookie, getCookie, getOneMonthExpiry } from "../../utils/handleCookie";
import { commonConfig } from "../../utils/config/config";

export const doLogin = async (body) =>  {
    const res = await api.login(body);
    if(typeof res !== "undefined" && res.code === 200){
        let body = { ...res.body}
        let user = { name: commonConfig.LOGGEDIN_USER, value: JSON.stringify(body), expiry: getOneMonthExpiry() };
        setCookie(user);
        let accessToken = { name: commonConfig.ACCESS_TOKEN, value: body.access_token, expiry: getOneMonthExpiry() };
        setCookie(accessToken);
    }
    return res;
}

export const doRegister = async (body) =>  {
    const res = await api.signup(body);
    if(typeof res !== "undefined" && res.code === 200){
        let body = { ...res.body}
        let user = { name: commonConfig.LOGGEDIN_USER, value: JSON.stringify(body), expiry: getOneMonthExpiry() };
        setCookie(user);
        let accessToken = { name: commonConfig.ACCESS_TOKEN, value: body.access_token, expiry: getOneMonthExpiry() };
        setCookie(accessToken);
    }
    return res;
}