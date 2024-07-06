import errorHandler from './errorHandler';
// import { toastMsg } from '../handleToast';
// import { NO_LOADER_APIS } from "../constants/constants.js";

const successHandler = (response, vue) => {
    try{
        if(typeof response === "undefined"){
            return response;
        }
        if(typeof response.code === "undefined" && typeof response.data.code === "undefined"){
            return response;
        }
        if ((response.code || response.data.code) === 200) {
            // if (response.data.message && 
            //     response.config.method !== 'get' && 
            //     !NO_LOADER_APIS.includes(response.config.url) &&
            //     !response.config.url.includes(NO_LOADER_APIS[1]) &&
            //     !response.config.url.includes(NO_LOADER_APIS[3])
            // ) toastMsg(response.data.message, "success");
            return response.data || response;
        }
        else return errorHandler(response, vue)
    }catch(err){
        return response;
    }
};
export default successHandler;
