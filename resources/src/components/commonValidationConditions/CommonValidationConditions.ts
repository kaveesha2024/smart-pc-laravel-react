export const isAdmin = (role: string): boolean => {
    return role === 'admin';
};
export const haveToken = (token: string): boolean => {
    return token !== "";
}
export const haveUserId = (userId: string): boolean => {
    return userId !== "";
}
export const isAuth = (isAuthenticated: boolean): boolean => {
    return isAuthenticated;
}
