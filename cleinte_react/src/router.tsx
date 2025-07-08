import { createBrowserRouter } from "react-router-dom";
import IngresoArriendo from "./views/IngresoArriendo";
import Devolucion from "./views/Devolucion";
import Estadisticas from "./views/Estadisticas";
import CrearUser from "./views/CrearUsuario";
import InicioSesion from "./views/InicioSesion";
import RecoverPassword from "./views/RecoverPassword";
import Registros from "./views/Registros";
import Layout from "./layouts/Layout";

export const router = createBrowserRouter([
    {
        path: "/", // Ruta raíz: Login sin Layout
        element: <InicioSesion />
    },
    {
        path: "crear-usuario",
        element: <CrearUser />
     },
    {
        path: "/", // Todas las demás rutas con Layout
        element: <Layout />, // Layout general aquí
        children: [
            {
                path: "ingreso-arriendo",
                element: <IngresoArriendo />
            },
            {
                path: "devolucion",
                element: <Devolucion />
            },
            {
                path: "registros",
                element: <Registros />
            },
            {
                path: "estadisticas",
                element: <Estadisticas />
            },

            {
                path: "login/recover",
                element: <RecoverPassword />
            }
        ]
    }
]);
