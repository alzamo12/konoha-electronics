import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/brand/:brand",
                element: <BrandDetails />
            }
        ]
    },
]);

export default router