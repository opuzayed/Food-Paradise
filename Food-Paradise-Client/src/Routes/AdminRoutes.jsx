import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoutes = ({children}) => {
    //vai boshaise const [user, loading] = useAuth();

    const {user, loading} = useAuth(); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading)
    {
        return (
            <div className="flex justify-center items-center h-screen">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          );
    }

    if(user && isAdmin)
    {
        return children;
    }
    
    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoutes;