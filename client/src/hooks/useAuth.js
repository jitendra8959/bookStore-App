import { useSelector } from "react-redux";
export const useAuth = () => {
    const authUser = useSelector((state) => state.auth.authUser);
    if(!authUser){
        return false;
    }
    if(typeof authUser === 'string'){
        return JSON.parse(authUser);
    }else{
        return authUser;
    }   
}