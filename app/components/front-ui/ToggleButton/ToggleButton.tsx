"use client";

import Image from "next/image";
import LightMode from "../../../../public/light-mode-toggle-icon.png";
import DarkMode from "../../../../public/dark-mode-toggle-icon.png";
import { useState } from "react";

const ToggleButton = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark":"light");
    };

    return (
        <div className="relative" onClick={toggleTheme}>
            {theme === "light" ? (
                <Image src={LightMode} alt="Light mode toggle button" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10" />
            ) : (
                <Image src={DarkMode} alt="Dark mode toggle button" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300" />
            )}
           {/* <Image src={LightMode} alt="Light mode toggle button" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10" />
           <Image src={DarkMode} alt="Light mode toggle button" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300" /> */}
        </div>
    );
};

export default ToggleButton;