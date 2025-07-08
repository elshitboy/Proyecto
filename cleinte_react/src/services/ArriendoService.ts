// src/services/authService.ts
import axios from "axios";

interface Arriendo {
    message: string;
    arriendo: {
        patenteVehiculo: string;
        tipoVehiculo: string;
        rutCliente: string;
        nombreCliente: string;

    };
}

export const Arriendo = async ( patente_vehiculo: string , tipo_vehiculo: string , rut_cliente: string, nombre_cliente: string): Promise<Arriendo> => {
    const response = await axios.post("http://localhost:3000/api/arriendos", {
        patente_vehiculo,
        tipo_vehiculo,
        rut_cliente,
        nombre_cliente
    });

    return response.data;
};

export interface ArriendoTodos {
  id: number;
  fechaInicio: string;
  fechaTermino: string | null;
  patenteVehiculo: string;
  tipoVehiculo: string;
  rutCliente: string;
  nombreCliente: string;
  
}


export const getArriendosTodos = async (): Promise<ArriendoTodos[]> => {
  const response = await axios.get("http://localhost:3000/api/arriendos/todos", {
    headers: { 'Cache-Control': 'no-cache' },
  });
  return response.data;
};

export const getArriendosActivos = async (): Promise<ArriendoTodos[]> => {
  const response = await axios.get("http://localhost:3000/api/arriendos/activos", {
    headers: { 'Cache-Control': 'no-cache' },
  });
  return response.data;
};



export const eliminarArriendo = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3000/api/arriendos/${id}`);
};

export const devolverArriendo = async (id: number): Promise<void> => {
  await axios.put(`http://localhost:3000/api/arriendos/${id}`);
};


