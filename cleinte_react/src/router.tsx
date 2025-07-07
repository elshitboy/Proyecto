import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import IngresoArriendo from "./views/IngresoArriendo";
import Devolucion from "./views/Devolucion";
import Estadisticas from "./views/Estadisticas";
import InicioSesion from "./views/InicioSesion";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'ingreso-arriendo',
                element: <IngresoArriendo/>
            },
            {
                path:'devolucion',
                element: <Devolucion/>
            },
            {
                path:'estadisticas',
                element: <Estadisticas/>
            },
            {
                path:'login',
                element: <InicioSesion/>
            },
        ]
    }
])