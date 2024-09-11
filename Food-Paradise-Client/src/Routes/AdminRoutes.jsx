import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoutes = () => {
    //vai boshaise const {user, loading} = useAuth();
    
    const {user, loading} = useAuth(); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading)
    {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default AdminRoutes;