import { useEffect } from 'react';
import axios from 'axios';
import { commonConfig } from "./config/config.js";
// import { NO_LOADER_APIS } from "./constants/constants.js";
import successHandler from './interceptors/successHandler.js';
import errorHandler from './interceptors/errorHandler.js';
import authInterceptor from './interceptors/authInterceptor.js';
// import { getCookie } from "./handleCookie";

import { useLoader } from '../context/LoaderContext.jsx';



const useAxiosConfig = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    const configureAxios = () => {
      // Set default headers and options for axios
      axios.defaults.baseURL = `${commonConfig.API_URL}${commonConfig.API_END_POINT}`;
      axios.defaults.customHeaders = true;
      axios.defaults.withCredentials = true;
      axios.defaults.defaultErrorHandler = true;

      axios.interceptors.request.use(
        (config) => {
          authInterceptor(config);
          setIsLoading(true);
          return config;
        },
        (error) => {
          setIsLoading(false);
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        (response) => {
          setIsLoading(false);
          return successHandler(response);
        },
        (error) => {
          setIsLoading(false);
          return errorHandler(error);
        }
      );

      axios.interceptors.response.use(response => successHandler(response), error => errorHandler(error));
    };

    configureAxios();
  }, [setIsLoading]);
};

export default useAxiosConfig;


// export const useAxiosConfig = function (vue) {
//   const { isLoading, setIsLoading } = useLoader();
//   setIsLoading("Rajput")
//   console.log("isLoading", isLoading);

//   // set default headers and options of axios for api request
//   axios.defaults.baseURL = `${commonConfig.API_URL}${commonConfig.API_END_POINT}`;
//   axios.defaults.customHeaders = true;
//   axios.defaults.withCredentials = true;
//   axios.defaults.defaultErrorHandler = true;
//   // axios.defaults.headers.common['timezone_offset'] = new Date().getTimezoneOffset();
//   // axios.defaults.headers.common['timezone_name'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   axios.interceptors.request.use(config => {
//     authInterceptor(config)
//     // show loader
//     // if(!NO_LOADER_APIS.includes(config.url) && 
//     //   !config.url.includes(NO_LOADER_APIS[1]) &&
//     //   !config.url.includes(NO_LOADER_APIS[3])
//     // ) vue.proxy.isLoading.value = true;
//     return config
//   }, (error) => {
//     return Promise.reject(error);
//   });
//   // axios.interceptors.response.use(res => {
//   //   // hide loader
//   //   // if(!NO_LOADER_APIS.includes(res.config.url) && 
//   //   //   !res.config.url.includes(NO_LOADER_APIS[1]) &&
//   //   //   !res.config.url.includes(NO_LOADER_APIS[3])
//   //   // ) vue.proxy.isLoading.value = false;
//   //   return res.data
//   // }, (error) => {
//   //   return Promise.reject(error);
//   // });
//   axios.interceptors.response.use(response => successHandler(response, vue), error => errorHandler(error, vue));
// };
