export const saveAuth = (data) => {
    localStorage.setItem("jwt", data.jwt);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("userRole", data.userRole);
};

export const getToken = () => {
    return localStorage.getItem("jwt");
};

export const getUserId = () => {
    return localStorage.getItem("userId");
};

export const getUserRole = () => {
    return localStorage.getItem("userRole");
};

export const clearAuth = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
};

export const isAuthenticated = () => {
    return !!getToken();
};