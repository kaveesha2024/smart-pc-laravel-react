import React from "react";
import welcomeHero from "../../../public/welcome-hero.jpg";
import NavigationBar from "../navigation/NavigationBar.tsx";

const HeroSection:React.FC = () => {
    return (
        <div>
            <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${welcomeHero})`}}>
                <NavigationBar />
                <div className="w-full h-[100%] flex ">
                    <div className='w-[50%] h-full  p-20 text-start flex justify-center items-center text-7xl font-bold  ' ><span className='text-[black]'>Build Your Dream Desktop With Us.</span></div>
                    <div className='w-[50%] h-full ' ></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
