import { type FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { crearCuenta } from "../controllers/loginController";

export default function CrearUsuarios() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    await crearCuenta(
      email,
      password,
      () => {
        setSuccess("Usuario creado correctamente. Redirigiendo...");
        setTimeout(() => navigate("/"), 2000);
      },
      (msg) => {
        setError("No se pudo crear el usuario: " + msg);
      }
    );
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4 text-primary">Crear Usuario</h2>

            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="txtemail" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  id="txtemail"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtpassword" className="form-label">Contraseña</label>
                <input
                  type="password"
                  id="txtpassword"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>

              <div className="d-flex justify-content-between mt-4 gap-2">
                <Link to="/" className="btn btn-secondary w-50">
                  Volver
                </Link>
                <button type="submit" className="btn btn-primary w-50">
                  Crear Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
