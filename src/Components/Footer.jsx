import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import footerBG from "../assets/more/footer-bg.jpg";
import navLogo from "../assets/more/logo1.png";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    // className="max-w-[1920px] mx-auto"
    const textShadow = {
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
    };
    return (
        <div
            className="pb-5 pt-14"
            style={{
                backgroundImage: `url(${footerBG})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-[1320px] mx-auto w-11/12 md:w-10/12">
                <img className="w-14" src={navLogo} alt="" />
            </div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-10 w-11/12 md:w-10/12">
                {/* column 1 */}
                <div className=" space-y-5">
                    <div className="flex flex-col space-y-5">
                        <p
                            className="pri-font text-3xl text-primary font-bold"
                            style={textShadow}
                        >
                            Espresso Emporium
                        </p>
                        <p className="sec-font text-sm">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <FaFacebook className="text-primary size-6"></FaFacebook>
                        <FaTwitter className="text-primary size-6"></FaTwitter>
                        <FaInstagram className="text-primary size-6"></FaInstagram>
                        <FaLinkedin className="text-primary size-6"></FaLinkedin>
                    </div>
                    <div className="space-y-3">
                        <p
                            className="pri-font text-3xl text-primary font-semibold"
                            style={textShadow}
                        >
                            Get in Touch
                        </p>
                        <div className="space-y-3">
                            <p className="flex gap-5 items-center sec-font text-primary">
                                <FaPhone className="rotate-90 size-4"></FaPhone>
                                +88 01533 333 333
                            </p>
                            <p className="flex gap-5 items-center sec-font text-primary">
                                <IoMdMail className="size-4" />
                                info.emporium@mail.com
                            </p>
                            <p className="flex gap-5 items-center sec-font text-primary">
                                <FaLocationDot className="size-4"></FaLocationDot>
                                72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                </div>
                {/* column 2 */}
                <div className="">
                    <p
                        className="pri-font text-3xl text-primary font-semibold pb-3"
                        style={textShadow}
                    >
                        Connect with Us
                    </p>
                    <form className="space-y-3">
                        <input
                            className="bg-white w-full p-2 rounded-sm placeholder:text-sm"
                            placeholder="Name"
                            type="text"
                            name="name"
                            id=""
                        />{" "}
                        <input
                            className="bg-white w-full p-2 rounded-sm placeholder:text-sm"
                            placeholder="Email"
                            type="text"
                            name="name"
                            id=""
                        />
                        <textarea
                            className="bg-white w-full p-2 rounded-sm placeholder:text-sm"
                            name="message"
                            rows={5}
                            id=""
                            placeholder="Message"
                        ></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
