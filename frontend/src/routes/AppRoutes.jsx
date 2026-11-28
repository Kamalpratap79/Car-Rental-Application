import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import AdminDashboard from "../pages/admin/AdminDashboard";
import CustomerDashboard from "../pages/customer/CustomerDashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {

    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            {/* Authentication Routes */}

            <Route element={<AuthLayout />}>

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

            </Route>

            {/* Admin Routes */}

            <Route element={<ProtectedRoute role="ADMIN" />}>

                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />

            </Route>

            {/* Customer Routes */}

            <Route element={<ProtectedRoute role="CUSTOMER" />}>

                <Route
                    path="/customer/dashboard"
                    element={<CustomerDashboard />}
                />

            </Route>

            {/* Invalid URL */}

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />

        </Routes>
    );
};

export default AppRoutes;