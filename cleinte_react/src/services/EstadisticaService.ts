import axios from "axios";

export interface Estadisticas {
  tipoVehiculo: string;
  vecesArrendado: number;
}

export const getEstadisticas = async (): Promise<Estadisticas[]> => {
  const response = await axios.get("http://localhost:3000/api/arriendos/vehiculos/tipos");

  // response.data es un objeto como { Sedan: 1, SUV: 0, Camioneta: 1 }
  const dataObj = response.data;

  // Convertimos a array
  const estadisticasArray: Estadisticas[] = Object.entries(dataObj).map(
    ([tipoVehiculo, vecesArrendado]) => ({
      tipoVehiculo,
      vecesArrendado: Number(vecesArrendado), // aseguramos número
    })
  );

  return estadisticasArray;
};

