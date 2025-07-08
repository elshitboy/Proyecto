import type { Estadisticas } from "../services/EstadisticaService";
import  { getEstadisticas } from "../services/EstadisticaService";

export const EstadisticaController = {
  obtenerEstadisticas: async (
    onSuccess: (data: Estadisticas[]) => void,
    onError: (msg: string) => void
  ): Promise<void> => {
    try {
      const data = await getEstadisticas();
      onSuccess(data);
    } catch (error: unknown) {
      console.error("Error en controlador:", error);
      onError("No se pudieron obtener las estadísticas.");
    }
  },
};
