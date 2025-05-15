import React, { useState } from "react";
import coffeeBg from "../assets/more/addCoffeebg.png";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router";

const AddCoffee = () => {
    const bgStyle = {
        backgroundImage: `url(${coffeeBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    const textShadow = {
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
    };

    const [error, setError] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (!name) {
            toast.error("Please provide a name");
            return;
        }
        const chef = form.chef.value;
        if (!chef) {
            toast.error("Please provide a  chef");
            return;
        }
        const supplier = form.supplier.value;
        if (!name) {
            toast.error("Please provide a supplier");
            return;
        }
        const taste = form.taste.value;
        if (!name) {
            toast.error("Please provide a taste");
            return;
        }
        const category = form.category.value;
        if (!name) {
            toast.error("Please provide a category");
            return;
        }
        const details = form.details.value;
        if (!name) {
            toast.error("Please provide details");
            return;
        }
        const photo = form.photo.value;
        if (!name) {
            toast.error("Please provide a photo url");
            return;
        }

        console.log({
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        });
    };

    return (
        <div style={bgStyle}>
            <div className="max-w-[1320px] mx-auto w-11/12 md:w-10/12">
                {/* Back button */}
                <div className="my-6">
                    <Link to="/" className="flex items-center text-primary">
                        <FaArrowLeft className="w-4 h-4 mr-2" />
                        <span
                            style={textShadow}
                            className="pri-font text-xl font-semibold"
                        >
                            Back to home
                        </span>
                    </Link>
                </div>

                {/* Main form card */}
                <form
                    onSubmit={handleFormSubmit}
                    className="bg-base-200 rounded-lg p-8 shadow-sm mb-20"
                >
                    {/* Form header */}
                    <h1
                        className="text-3xl pri-font font-semibold text-center text-primary mb-6"
                        style={textShadow}
                    >
                        Add New Coffee
                    </h1>

                    {/* Description text */}
                    <p className="text-gray-600 text-center mb-8 sec-font w-3/4 mx-auto">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>

                    {/* Form fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter coffee name"
                                className="input border-0 w-full bg-white"
                            />
                        </div>

                        {/* Chef field */}
                        <div>
                            <label
                                htmlFor="chef"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Chef
                            </label>
                            <input
                                type="text"
                                id="chef"
                                name="chef"
                                placeholder="Enter coffee chef"
                                className="input border-0 w-full bg-white"
                            />
                        </div>

                        {/* Supplier field */}
                        <div>
                            <label
                                htmlFor="supplier"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Supplier
                            </label>
                            <input
                                type="text"
                                id="supplier"
                                name="supplier"
                                placeholder="Enter coffee supplier"
                                className="input border-0 w-full bg-white"
                            />
                        </div>

                        {/* Taste field */}
                        <div>
                            <label
                                htmlFor="taste"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Taste
                            </label>
                            <input
                                type="text"
                                id="taste"
                                name="taste"
                                placeholder="Enter coffee taste"
                                className="input border-0 w-full bg-white"
                            />
                        </div>

                        {/* Category field */}
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                placeholder="Enter coffee category"
                                className="input border-0 w-full bg-white"
                            />
                        </div>

                        {/* Details field */}
                        <div>
                            <label
                                htmlFor="details"
                                className="block text-[#1B1A1A] font-medium mb-2"
                            >
                                Details
                            </label>
                            <input
                                type="text"
                                id="details"
                                name="details"
                                placeholder="Enter coffee details"
                                className="input border-0 w-full bg-white"
                            />
                        </div>
                    </div>

                    {/* Photo URL field - full width */}
                    <div className="mt-6">
                        <label
                            htmlFor="photo"
                            className="block text-[#1B1A1A] font-medium mb-2"
                        >
                            Photo
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="input border-0 w-full bg-white"
                        />
                    </div>

                    {/* Submit button */}

                    <button
                        type="submit"
                        className="mt-8 w-full btn bg-secondary text-primary pri-font border-2 text-xl border-primary font-medium"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
