import { useState, useEffect } from "react";
import type { ArriendoTodos } from "../services/ArriendoService";
import { ArriendosController } from "../controllers/arriendoController";

interface ArriendosPorTipo {
  tipoVehiculo: string;
  arriendos: ArriendoTodos[];
}

export default function ArriendosPorTipoVista() {
  const [arriendos, setArriendos] = useState<ArriendoTodos[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    ArriendosController.obtenerArriendosTodos(
      (data) => setArriendos(data),
      (msg) => setError(msg)
    );
  }, []);

  const arriendosAgrupados: ArriendosPorTipo[] = Object.values(
    arriendos.reduce<Record<string, ArriendosPorTipo>>((acc, arriendo) => {
      if (!acc[arriendo.tipoVehiculo]) {
        acc[arriendo.tipoVehiculo] = {
          tipoVehiculo: arriendo.tipoVehiculo,
          arriendos: [],
        };
      }
      acc[arriendo.tipoVehiculo].arriendos.push(arriendo);
      return acc;
    }, {})
  );

  const handleEliminar = (id: number) => {
    const confirmar = window.confirm("¿Estás seguro que deseas eliminar este arriendo?");
    if (!confirmar) return;

    ArriendosController.eliminarArriendo(
      id,
      () => {
        // Éxito: elimina localmente de la tabla
        setArriendos((prev) => prev.filter((a) => a.id !== id));
      },
      (msg) => {
        alert(msg);
      }
    );
  };

  

  return (
    <div className="container">
      <h1 className="text-center">Arriendos agrupados por tipo de vehículo</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      {arriendosAgrupados.map(({ tipoVehiculo, arriendos }) => (
        <div key={tipoVehiculo} className="card my-3">
          <div className="card-header bg-primary text-white">
            {tipoVehiculo} — {arriendos.length} arriendo(s)
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Patente</th>
                  <th>RUT Cliente</th>
                  <th>Nombre Cliente</th>
                  <th>Fecha Inicio</th>
                  <th>Fecha Termino</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {arriendos.map((a) => (
                  <tr key={a.id}>
                    <td>{a.patenteVehiculo}</td>
                    <td>{a.rutCliente}</td>
                    <td>{a.nombreCliente}</td>
                    <td>{new Date(a.fechaInicio).toLocaleDateString()}</td>
                    <td>
                      {a.fechaTermino ? (
                        <span className="badge bg-danger">
                          {new Date(a.fechaTermino).toLocaleDateString()} Terminado <i className="bi bi-x-circle-fill me-1"></i> 
                        </span>
                      ) : (
                        <span className="badge bg-success">
                          Activo <i className="bi bi-check-circle-fill me-1"></i>
                        </span>
                      )}
                    </td>


                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleEliminar(a.id)}
                      >
                      Eliminar <i className="bi bi-trash-fill me-1"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
