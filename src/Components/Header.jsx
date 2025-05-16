import React from "react";
import navBG from "../assets/more/navbar-bg.jpg";
import navLogo from "../assets/more/logo1.png";

const Header = () => {
    return (
        <nav
            style={{
                backgroundImage: `url(${navBG})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex gap-3 items-center justify-center py-2 max-w-[1920px] mx-auto">
                <img className="w-20" src={navLogo} alt="" />
                <h1 className="pri-font text-6xl  text-white">
                    Espresso Emporium
                </h1>
            </div>
        </nav>
    );
};

export default Header;
