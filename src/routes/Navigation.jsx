import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import CheckOut from "../pages/CheckOut";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/checkout',
        element:<CheckOut/>
    }

])

const Navigation = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Navigation;