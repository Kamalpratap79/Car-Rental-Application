import { createContext, useState } from "react";
import { login as loginApi } from "../services/authService";
import {
    saveAuth,
    getToken,
    getUserId,
    getUserRole,
    clearAuth
} from "../utils/storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const jwt = getToken();

        if (!jwt) {
            return null;
        }

        return {
            jwt: jwt,
            userId: getUserId(),
            userRole: getUserRole()
        };
    });

    const login = async (credentials) => {

        const response = await loginApi(credentials);
        const data = response.data;

        saveAuth(data);
        setUser(data);

        return data;
    };

    const logout = () => {
        clearAuth();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user?.jwt
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};