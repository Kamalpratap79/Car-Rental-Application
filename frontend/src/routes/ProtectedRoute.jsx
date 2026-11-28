import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ role }) => {

    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (role && user.userRole !== role) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;