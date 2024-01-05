import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Alquileres, Autos, CheckOut, Home, Hospedajes, Nosotros, Paquetes, Vuelos, Contacto, Garantias } from "../pages";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/alquileres',
        element: <Alquileres />
    },
    {
        path: '/vuelos',
        element: <Vuelos />
    },
    {
        path: '/hospedajes',
        element: <Hospedajes />
    },
    {
        path: '/paquetes',
        element: <Paquetes />
    },
    {
        path: '/autos',
        element: <Autos />
    },
    {
        path: '/checkout',
        element: <CheckOut />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
    {
        path: '/contacto',
        element: <Contacto />

    },
    {
        path: '/garantias',
        element: <Garantias />

    }
])

const Navigation = () => {
    return (
        <RouterProvider router={routes} />
    );
}

export default Navigation;