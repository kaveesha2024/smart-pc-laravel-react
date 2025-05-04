import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignUp from "../../pages/signUpPage/SignUp.tsx";
import axios from "axios";
import SignIn from "../../pages/signInPage/SignIn.tsx";
import Welcome from "../../pages/welcomePage/Welcome.tsx";
import { Toaster } from "react-hot-toast";
import AdminPanel from "../../pages/profiles/adminPanel/AdminPanel.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import {
    haveToken,
    haveUserId,
    isAdmin,
    isAuth,
} from "../../components/commonValidationConditions/CommonValidationConditions.ts";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
const WebRoutes: React.FC = () => {
    const { isAuthenticated, token, role, userId } = useSelector(
        (state: RootState) => state.authentication,
    );
    return (
        <div>
            <Toaster />
            <Routes>
                <Route path="/user/signup" element={<SignUp />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/" element={<Welcome />} />
                <Route
                    path="/admin/panel"
                    element={
                        isAuth(isAuthenticated) &&
                        haveUserId(userId) &&
                        haveToken(token) &&
                        isAdmin(role) ? (
                            <AdminPanel />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route path="/user/profile" element={<Welcome />} />
            </Routes>
        </div>
    );
};

export default WebRoutes;
