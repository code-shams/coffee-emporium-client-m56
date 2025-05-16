import React from "react";
import banner from "../../assets/more/banner.png";

const Bannner = () => {
    const bgStyle = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
    return (
        <div
            style={bgStyle}
            className="mx-auto max-w-[1920px] w-full h-[700px] grid grid-cols-12 border-t-5 border-[#372727]"
        >
            <div className="col-start-7 col-span-5 space-y-5 flex flex-col justify-center">
                <p className="pri-font text-3xl font-semibold text-white">
                    Would you like a Cup of Delicious Coffee?
                </p>
                <p className="sec-font text-white text-sm">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <div>
                    <button className="px-3 py-1 bg-secondary text-primary text-xl pri-font rounded-xs">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bannner;
