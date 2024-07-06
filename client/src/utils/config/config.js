export const commonConfig = {
    APP_URL: import.meta.env.VITE_APP_URL,
    ASSET_URL: import.meta.env.VITE_ASSET_URL,
    API_URL: import.meta.env.VITE_NODE_APP_URL,
    URL_PREFIX: import.meta.env.VITE_URL_PREFIX,
    NOVA_URL_PREFIX: import.meta.env.VITE_NOVA_ASSET_URL,
    API_END_POINT: import.meta.env.VITE_API_END_POINT,
    LOGGEDIN_USER: import.meta.env.VITE_LOGGEDIN_USER,
    ACCESS_TOKEN: import.meta.env.VITE_ACCESS_TOKEN,
    FB_FCM_TOKEN: import.meta.env.VITE_FB_FCM_KEY,
    AWS_S3_CLOUDFORN_URL: import.meta.env.VITE_AWS_S3_CLOUDFORN_URL,
    MAP_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
}