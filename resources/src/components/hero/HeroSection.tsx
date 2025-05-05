import React from "react";
import welcomeHero from "../../../public/welcome-hero.jpg";
import NavigationBar from "../navigation/main/NavigationBar.tsx";

const HeroSection: React.FC = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${welcomeHero})` }}>
            <NavigationBar />
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24">
                <div className="w-full md:w-1/2 h-full flex justify-center items-center text-center md:text-start">
                    <h1 className="text-6xl  sm:text-7xl lg:text-7xl font-bold text-white leading-tight">
                        Build Your Dream Desktop <br className="hidden sm:block" /> With Us.
                    </h1>
                </div>
                <div className="w-full md:w-1/2 h-full hidden md:block"></div>
            </div>
        </div>
    );
};

export default HeroSection;
