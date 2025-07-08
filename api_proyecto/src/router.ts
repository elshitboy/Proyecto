import { Router } from 'express';
import {
    arriendosActivos,
    arriendosoPorTipo,
    arriendosTerminados,
    crearArriendo,
    devolucionVehiculo,
    eliminarArriendo,
    arriendosTodos
} from "./handlers/arriendos"

import {
    login,
    crearUsuario,
    cambiarContraseña,
    logout
} from "./handlers/usuarios"


const router = Router();

router.post('/usuarios/login',login)//para el iniciar sesion



router.post('/usuarios', crearUsuario) // para crear un usuario
router.post('/usuarios/salir', logout) // para cerrar sesion
router.put('/usuarios/cambiar-contrasena', cambiarContraseña) // para cambiar la contraseña

router.post('/arriendos', crearArriendo) //para crear un arriendo
router.put('/arriendos/:id', devolucionVehiculo) //para devolver un vehiculo
router.delete('/arriendos/:id', eliminarArriendo) // para eliminar un arriendo
router.get('/arriendos/activos', arriendosActivos) // arriendos activos
router.get('/arriendos/completados', arriendosTerminados) //arriendos terminados
router.get('/arriendos/vehiculos/tipos', arriendosoPorTipo) //arriendos por tipo de vehiculo
router.get("/arriendos/todos", arriendosTodos);


export default router 