import React from "react";
import { Route, Routes } from "react-router";
// import App from "../../App.tsx";
import SignUp from "../../pages/signUpPage/SignUp.tsx";
import axios from "axios";
import SignIn from "../../pages/signInPage/SignIn.tsx";
import Welcome from "../../pages/welcomePage/Welcome.tsx";
import { Toaster } from "react-hot-toast";
import AdminPanel from "../../pages/profiles/adminPanel/AdminPanel.tsx";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
const WebRoutes: React.FC = () => {
    return (
        <div>
            <Toaster />
            <Routes>
                {/*<Route path="/" element={<App />} />*/}
                <Route path="/user/signup" element={<SignUp />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/admin/panel" element={<AdminPanel />} />
                <Route path="/user/profile" element={<Welcome />} />
            </Routes>
        </div>
    );
};

export default WebRoutes;
