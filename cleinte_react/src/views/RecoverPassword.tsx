import { Link, useNavigate } from "react-router-dom";
import { type FormEvent, useState } from "react";
import { cambiarContras } from "../controllers/loginController";

export default function RecoverPassword() {
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();


    await cambiarContras(
      email,
      password1,
      password2,
      () => {
        alert("Contraseña cambiada exitosamente.");
        navigate("/ingreso-arriendo");
      },
      (msg) => {
        setError(msg || "Error al cambiar la contraseña.");
        alert("No se pudo cambiar la contraseña.");
      }
    );
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center">
            <h4 className="mb-0">Restablecer Contraseña</h4>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="txtemail" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  id="txtemail"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@correo.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtpassword1" className="form-label">Actual contraseña</label>
                <input
                  type="password"
                  id="txtpassword1"
                  className="form-control"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtpassword2" className="form-label">Nueva contraseña</label>
                <input
                  type="password"
                  id="txtpassword2"
                  className="form-control"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="********"
                  required
                />
              </div>
              {error && (
                <div className="alert alert-danger text-center">
                  {error}
                </div>
              )}
              <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-warning">← Volver</Link>
                <button type="submit" className="btn btn-primary">
                  Confirmar cambio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
