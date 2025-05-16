import React, { useState } from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { PiCoffee } from "react-icons/pi";
import productBG from "../../assets/more/productbg.png";

import { data, Link } from "react-router";

const Products = ({ coffeeData }) => {
    const [localCoffee, setLocalCoffee] = useState(coffeeData);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 800,
                                showConfirmButton: false,
                            });
                            const newCoffees = localCoffee.filter(
                                (coffee) => coffee._id !== id
                            );
                            setLocalCoffee(newCoffees);
                        }
                    });
            }
        });
    };

    const textShadow = {
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
    };

    const bgStyle = {
        backgroundImage: `url(${productBG})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={bgStyle}>
            <div className="max-w-[1320px] mx-auto py-10 w-11/12 md:w-10/12">
                <div className="text-center space-y-2 mb-8">
                    <p className="text-sm font-medium">--- Sip & Savor ---</p>
                    <h2
                        className="text-3xl font-bold text-primary pri-font"
                        style={textShadow}
                    >
                        Our Popular Products
                    </h2>

                    <Link
                        to="/add-coffee"
                        className="btn btn-sm bg-[#E3B577] pri-font text-white mt-2 border-primary"
                        style={textShadow}
                    >
                        <span className="flex items-center gap-1 text-sm">
                            Add Coffee{" "}
                            <PiCoffee className="size-4 text-primary"></PiCoffee>
                        </span>
                    </Link>
                </div>
                {/* Coffee Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {localCoffee.map((coffee) => (
                        <div
                            key={coffee._id}
                            className="card card-side bg-[#f5f4f1a9] grid grid-cols-3 items-center p-4"
                        >
                            <img
                                src={coffee.photo}
                                alt={coffee.name}
                                className="h-38"
                            />
                            <div className="flex-1 ml-1 space-y-1">
                                <p>
                                    <span className="font-bold">Name:</span>{" "}
                                    {coffee.name}
                                </p>
                                <p>
                                    <span className="font-bold">Chef:</span>{" "}
                                    {coffee.chef}
                                </p>
                                <p>
                                    <span className="font-bold">Price:</span>{" "}
                                    {coffee.price} Taka
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 ml-auto">
                                <button className="p-3 rounded-sm bg-[#D2B48C]">
                                    <FaEye className="text-white" />
                                </button>
                                <button className="p-3 rounded-sm bg-[#3C393B]">
                                    <FaPen className="text-white" />
                                </button>
                                <button
                                    onClick={() => handleDelete(coffee._id)}
                                    className="p-3 rounded-sm bg-[#EA4744]"
                                >
                                    <FaTrashAlt className="text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
