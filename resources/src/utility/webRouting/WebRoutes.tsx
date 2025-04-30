import React from "react";
import { Route, Routes } from "react-router";
// import App from "../../App.tsx";
import SignUp from "../../components/user/signUp/SignUp.tsx";
import axios from "axios";
import SignIn from "../../components/user/signIn/SignIn.tsx";
import Welcome from "../../pages/welcomePage/Welcome.tsx";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
const WebRoutes: React.FC = () => {
    return (
        <div>
            <Routes>
                {/*<Route path="/" element={<App />} />*/}
                <Route path="/user/signup" element={<SignUp />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/" element={<Welcome />} />
            </Routes>
        </div>
    );
};

export default WebRoutes;
