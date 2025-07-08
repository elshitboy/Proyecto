import { Request, Response } from 'express'
import Arriendo from '../models/Arriendo'
import db from '../config/db'
import { Op } from 'sequelize'

//endpoint POST para crear un arriendo (se envia al servidor los datos del arriendo)   /api/arriendos
export const crearArriendo = async (request: Request, response: Response) => {
    try {
        //Obtencion de datos que envia el cliente
        const { patente_vehiculo, tipo_vehiculo, rut_cliente, nombre_cliente } = request.body
        
        //Validamos que los datos no esten vacios
        if (!patente_vehiculo || !tipo_vehiculo || !rut_cliente || !nombre_cliente) {
            return response.status(400).json({ message: 'Todos los campos son obligatorios' })
        }
        //Validacion de tipo de vehiculo
        const Validos = ['Sedan', 'SUV', 'Camioneta']
        if (!Validos.includes(tipo_vehiculo)) {
            return response.status(400).json({ message: 'tipo de vehiculo no valido' })
        }

        //Obtencion de la fecha actual para el inicio del arriendo
        const fechaActual = new Date();
        //Creacion del arriendo 
        const nuevoArriendo = await Arriendo.create({
            fechaInicio: new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            fechaActual.getDate()
            ), //fecha de inicio es la fecha actual para cada arriendo
            fechaTermino: null, //la fecha de termino es null al inicio ya que el arriendo no ha terminado
            patenteVehiculo: patente_vehiculo,
            tipoVehiculo: tipo_vehiculo,
            rutCliente: rut_cliente,
            nombreCliente: nombre_cliente
        })

        //respuesta de exito de arriendo creado
        response.status(201).json({message: 'arriendo creado exitosamente'});
    } catch (error) {
        console.error('error en crear arriendo:', error)
        response.status(500).json({ messsage: 'error en el servidor' })
    }
}


//Devolucionn de vehiculo PUT (Para actualizar) /api/arriendos/:id
export const devolucionVehiculo = async (request: Request, response: Response) => {
    try {
        const { id } = request.params //se obtiene el id para la devolucion del vehiculo

        //validamos que exista el arriendo con el id
        const arriendo = await Arriendo.findByPk(id)

        if (!arriendo) {
            return response.status(404).json({ message: 'arriendo no fue encontrado' })
        }
        //Obtenemos la fecha actual para actualizar la fecha de termino del arriendo
        const fechaActual = new Date();
        //Con esto actualizamos la fecha de termino del arriendo
        arriendo.fechaTermino = new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            fechaActual.getDate()
        ) //Fecha de termino es la fecha actual
        await arriendo.save() //Se guardan los cambios en la base de datos

        //Respuesta de exito en la devolucion del vehiculo
        response.status(200).json({ message: 'vehiculo devuelto' })
    } catch (error) {
        console.error('error en la devolucion del vehiculo:', error)
        response.status(500).json({ message: 'error en el servidor' })
    }
}


//Para borrar un arriendo DELETE (para eliminar un arriendo) api/arriendos/:id
export const eliminarArriendo = async (request: Request, response: Response) => {
    try {
        const { id } = request.params // obtener el id del arriendo a eliminar

        //eliminamos el arriendo con el id
        const eliminados = await Arriendo.destroy({
            where: { id: id }
        })

        //si no se encontro el arriendo o si no se elimino ningun arriendo
        if (eliminados === 0) {
            return response.status(404).json({ message: 'arriendo no encontrado o ya fue eliminado' })
        }

        response.status(200).json({ message: 'el arriendo fue eliminado' })
    } catch (error) {
        console.error('error al eliminar el arriendo:', error)
        response.status(500).json({ message: 'error en el servidor' })
    }
}


//Para obtener todos los arriendos GET (para listar todos los arriendos) /api/arriendos/activos
export const arriendosActivos = async (request: Request, response: Response) => {
    try {
        //buscamos con la fecha de temino NULL, ya que los arriendos no han terminado
        const arriendos = await Arriendo.findAll({
            where: { fechaTermino: null }
        })

        response.status(200).json(arriendos) // enviamos los arriendos activos 
    } catch (error) {
        console.error('error en la obtencion de arriendos acticvos:', error)
        response.status(500).json({ message: 'error en el servidor' })
    }
}

//mostar todos los arriendos ya terminados GET /api/arriendos/terminados
export const arriendosTerminados = async (request: Request, response: Response) => {
    //buscamos los arriendos que no tengan la fecha de termino NULL, ya que significa que ya han terminado
    try {
        const arriendosTerminados = await Arriendo.findAll({
            where: { fechaTermino: { [Op.ne]: null } } //Op.ne significa que no es igual a NULL
        })

        //enviamos la lista de los arriendos terminados
        response.status(200).json(arriendosTerminados)
    } catch (error) {
        console.error('error en el listado de arriendos ya terminados:', error)
        response.status(500).json({ message: 'error en el servidor' })
    }
}
//muestra todos Get /api/arriendos/todos
export const arriendosTodos = async (request: Request, response: Response) => {
  try {
    const todosArriendos = await Arriendo.findAll(); // sin filtro trae todos
    response.status(200).json(todosArriendos);
  } catch (error) {
    console.error('Error al obtener todos los arriendos:', error);
    response.status(500).json({ message: 'Error en el servidor' });
  }
};


//mostrar arriendos por tipo de vehiculos GET /api/arriendos/tipo/:tipoVehiculo
export const arriendosoPorTipo = async (request: Request, response: Response) => {
    try {
        //agrupacion por el tipo de vehiculo y se cuenta por cada tipo 
        const conteo = await Arriendo.findAll({
            attributes: ['tipoVehiculo', //ver que tipo de vehiculo es
                [db.fn('COUNT', db.col('id')), 'cantidad']], // se cuentan por IDs y los llamamos cantidad
            group: ['tipoVehiculo'] // esto agrupoa por tipo de vehiculo
        })

        //se formatean los resultados para que sea mas facil de usar, asegurando que los tipos esten presente
        const conteosFormateados: { [key: string]: number } = {
            'Sedan': 0,
            'SUV': 0,
            'Camioneta': 0
        }

        //asegura que el nombre de la propiedad 'cantidad' sea consistente
        conteo.forEach((item: any) => {
            conteosFormateados[item.tipoVehiculo] = item.dataValues.cantidad
        })

        //enviamos los conteos de los arriendos por tipo de vehiculo 
        response.status(200).json(conteosFormateados)
    } catch (error) {
        console.error('error en el conteo de arriendos por tipo de vehiculo: ', error)
        response.status(500).json({ message: 'error en el servidor' })
    }
}

