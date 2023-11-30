import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Alquileres, Autos, CheckOut, Home, Hospedajes, Paquetes, Vuelos } from "../pages";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
      path:'/alquileres',
      element:<Alquileres/>

    },
    {
        path:'/vuelos',
        element:<Vuelos/>
    },
   
    {  
    path:'/hospedajes',
    element: <Hospedajes/>

    },
    {
        path:'/paquetes',
        element:<Paquetes/>
    },
    {
        path:'/autos',
        element:<Autos/>
    },
     {
        path:'/checkout',
        element:<CheckOut/>
    },
])

const Navigation = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Navigation;