import React from 'react';
import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import SignUp from "../../components/user/signUp/SignUp.tsx";

const WebRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/user/signup" element={<SignUp />}/>
            </Routes>
        </div>
    );
};

export default WebRoutes;
