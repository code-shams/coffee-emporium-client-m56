import React from "react";
import { useLoaderData } from "react-router";
import Bannner from "./Bannner";
import Products from "./Products";

const Home = () => {
    const coffeeData = useLoaderData();
    return (
        <div>
            <Bannner></Bannner>
            <Products coffeeData={coffeeData}></Products>
        </div>
    );
};

export default Home;
