import axios from 'axios';
// import { toastMsg } from '../handleToast';
// import { NO_LOADER_APIS } from "../constants/constants.js";
import { deleteCookie, deleteStorage } from "../handleCookie";
import { commonConfig } from "../config/config";
// import { deleteMessagingToken, messaging } from "../firebaseConfig";

export default function errorHandler(error, vueInstance) {
	//hide loader
	// vueInstance.isLoading = false;
	// console.log('errorrrrr', error);
	// return false;
	if (typeof error.data === "undefined") {
		error = { ...error, ...error.response }
	}
	if (axios.isCancel(error.data)) {
		return Promise.reject(error.data);
	}
	if (typeof error.data === "undefined") {
		return error;
	}
	if (error.data.message && error.data.message === "Network Error") {
		// toastMsg("Error connecting server. Please check your internet connection.", "error");
		return Promise.reject(error.data);
	}
	// if (!NO_LOADER_APIS.includes(error.config.url)) {
	// 	const { message } = error.data;
	// 	switch (error.data.code) {
	// 		case 400:
	// 			toastMsg(message, "error");
	// 			break;
	// 		case 401:
	// 			// deleteFcmToken();
	// 			localStorage.removeItem('activePortal');
	// 			deleteStorage(commonConfig.LOGGEDIN_USER)
	// 			deleteCookie(commonConfig.LOGGEDIN_USER);
	// 			deleteCookie(commonConfig.ACCESS_TOKEN);
	// 			window.location.reload();
	// 			break;
	// 		case 403:
	// 			// deleteFcmToken();
	// 			localStorage.removeItem('activePortal');
	// 			deleteStorage(commonConfig.LOGGEDIN_USER)
	// 			deleteCookie(commonConfig.LOGGEDIN_USER);
	// 			deleteCookie(commonConfig.ACCESS_TOKEN);
	// 			window.location.reload();
	// 			break;
	// 		case 404:
	// 			toastMsg(message, "error");
	// 			break;
	// 		case 500:
	// 			toastMsg(message || "Seems like something went wrong! #500", "error");
	// 			break;
	// 		case 504:
	// 			toastMsg(message || "Sorry, could not access the external resource to refine the data for your request, please try again later!", "error");
	// 			break;
	// 		default:
	// 			toastMsg(message || 'Seems like something went wrong!', "error");
	// 			break;
	// 	}
	// }
	// return Promise.reject(error.response);
	return error.data;
}


