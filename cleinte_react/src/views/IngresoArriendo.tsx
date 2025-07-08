import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArriendoController } from "../controllers/arriendoController";

export default function IngresoArriendo() {
  const [patenteVehiculo, setpatenteVehiculo] = useState<string>("");
  const [tipoVehiculo, settipoVehiculo] = useState<string>("");
  const [rutCliente, setrutCliente] = useState<string>("");
  const [nombreCliente, setnombreCliente] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    await ArriendoController(
      patenteVehiculo,
      tipoVehiculo,
      rutCliente,
      nombreCliente,
      () => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/registros");
        }, 1500);
      },
      (msg) => {
        setError(msg || "No se pudo ingresar.");
      }
    );
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "80%" }}>
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Ingreso de Arriendo</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {success && (
                <div className="alert alert-success">
                  Arriendo registrado correctamente. Redirigiendo...
                </div>
              )}
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <label className="form-label">Patente del Vehículo</label>
                <input
                  type="text"
                  className="form-control"
                  value={patenteVehiculo}
                  onChange={(e) => setpatenteVehiculo(e.target.value)}
                  required
                  placeholder="Ej: ABCD-123"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tipo de Vehículo</label>
                <select
                  className="form-select"
                  value={tipoVehiculo}
                  onChange={(e) => settipoVehiculo(e.target.value)}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="SUV">SUV</option>
                  <option value="Camioneta">Camioneta</option>
                  <option value="Sedan">Sedan</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">RUT del Cliente</label>
                <input
                  type="text"
                  className="form-control"
                  value={rutCliente}
                  onChange={(e) => setrutCliente(e.target.value)}
                  required
                  placeholder="Ej: 12.345.678-9"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nombre del Cliente</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombreCliente}
                  onChange={(e) => setnombreCliente(e.target.value)}
                  required
                  placeholder="Nombre completo"
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Registrar Arriendo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
