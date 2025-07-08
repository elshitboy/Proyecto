import { Arriendo, devolverArriendo, type ArriendoTodos } from "../services/ArriendoService";
import { getArriendosTodos, eliminarArriendo, getArriendosActivos } from "../services/ArriendoService";


export const ArriendoController = async (
    patenteVehiculo: string,
    tipoVehiculo: string,
    rutCliente: string,
    nombreCliente: string,
    onSuccess: () => void,
    onError: (msg: string) => void
) => {
    try {
        const data = await Arriendo(patenteVehiculo, tipoVehiculo, rutCliente, nombreCliente);

        if (data.message) {
            onSuccess();
        }
    } catch (error) {
        console.error(error);
        onError("Credenciales incorrectas o error en el servidor.");
    }
};




export const ArriendosController = {
    obtenerArriendosTodos: async (
        onSuccess: (data: ArriendoTodos[]) => void,
        onError: (msg: string) => void
    ): Promise<void> => {
        try {
            const data = await getArriendosTodos();
            onSuccess(data);
        } catch (error: unknown) {
            console.error("Error al obtener arriendos:", error);
            onError("No se pudieron obtener los arriendos.");
        }
    },
    eliminarArriendo: async (
        id: number,
        onSuccess: () => void,
        onError: (msg: string) => void
    ): Promise<void> => {
        try {
            await eliminarArriendo(id);
            onSuccess();
        } catch (error) {
            console.error("Error al eliminar arriendo:", error);
            onError("No se pudo eliminar el arriendo.");
        }
    },
    obtenerArriendosActivos: async (
        onSuccess: (data: ArriendoTodos[]) => void,
        onError: (msg: string) => void
    ): Promise<void> => {
        try {
            const data = await getArriendosActivos();
            onSuccess(data);
        } catch (error: unknown) {
            console.error("Error al obtener arriendos activos:", error);
            onError("No se pudieron obtener los arriendos.");
        }
    },
    devolverArriendo: async (
        id: number,
        onSuccess: () => void,
        onError: (msg: string) => void
    ): Promise<void> => {
        try {
            await devolverArriendo(id);
            onSuccess();
        } catch (error) {
            console.error("Error al devolver vehiculo", error);
            onError("No se pudo devolver el arriendo.");
        }
    },

};


