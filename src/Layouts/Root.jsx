import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className="min-h-[calc(100vh-735px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Root;
