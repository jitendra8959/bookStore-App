import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';



// eslint-disable-next-line react/prop-types
export default function AuthGaurd({ Component }) {
    const [isLoading, setIsLoading] = useState(true);
    const routeLocation = useLocation();
    const authUser = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!authUser && (!routeLocation.pathname.includes('admin/login') || !routeLocation.pathname.includes('admin/register'))) {
            navigate('/admin/login');
        }else if(!authUser && routeLocation.pathname.includes('/')){
            navigate('/login');
        }else if(authUser && (routeLocation.pathname.includes('admin/login') || routeLocation.pathname.includes('admin/register'))){
            navigate('/admin');
        }else if(authUser && routeLocation.pathname.includes('login')){
            navigate('/');
        }
        setIsLoading(false);
    },[authUser, navigate, routeLocation.pathname]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return <Component />;
}
