import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])

const Navigation = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Navigation;