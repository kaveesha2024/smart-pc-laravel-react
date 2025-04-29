import React from 'react';
import {Route, Routes} from "react-router";
import App from "../../App.tsx";

const WebRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </div>
    );
};

export default WebRoutes;
