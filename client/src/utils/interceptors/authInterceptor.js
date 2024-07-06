import { getCookie } from "../handleCookie";
import { commonConfig } from "../config/config";

export default function authInterceptor(config) {
	try{
		const token = getCookie(commonConfig.ACCESS_TOKEN);
		config.headers['Authorization'] = `Bearer ${token}`;
		return config;
	}catch(e){
		return config;
	}
}
