import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contactos,Nosotros,Garantias} from "../pages";




const routes = createBrowserRouter([

    {
      path:'/contactos',
      element:<Contactos/>

    },
    {
        path:'/nosotros',
        element:<Nosotros/>
    },
   
    {  
    path:'/garantias',
    element: <Garantias/>

    }
])

const NavFooter = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default NavFooter;