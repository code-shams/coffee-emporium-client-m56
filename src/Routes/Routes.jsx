import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:3000/coffee"),
                Component: Home,
            },
            {
                path: "add-coffee",
                Component: AddCoffee
            }
        ],
    },
]);


