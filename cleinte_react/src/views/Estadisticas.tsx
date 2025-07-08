import { useState, useEffect } from "react";
import type { Estadisticas as EstadisticasTipo } from "../services/EstadisticaService";
import { EstadisticaController } from "../controllers/EstadisticaController";

export default function Estadisticas() {
  const [estadisticas, setEstadisticas] = useState<EstadisticasTipo[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    EstadisticaController.obtenerEstadisticas(
      (data) => setEstadisticas(data),
      (msg) => setError(msg)
    );
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <h1 className="display-5 fw-bold text-primary">Estadísticas de Arriendos</h1>
          <p className="text-muted">Resumen de arriendos por tipo de vehículo registrados en el sistema</p>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>

      {estadisticas.length > 0 ? (
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Tipos de Vehículos Arrendados</h5>
              </div>
              <div className="card-body">
                <table className="table table-hover table-bordered align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Tipo de Vehículo</th>
                      <th>Veces Arrendado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estadisticas.map((item, index) => (
                      <tr key={index}>
                        <td className="fw-semibold">{item.tipoVehiculo}</td>
                        <td>
                          <span className="badge bg-success fs-6 py-2 px-3">
                            {item.vecesArrendado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !error && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-2 text-muted">Cargando estadísticas...</p>
          </div>
        )
      )}
    </div>
  );
}
