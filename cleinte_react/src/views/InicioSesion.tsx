import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginController } from "../controllers/loginController";

export default function InicioSesion() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await loginController(
            email,
            password,
            () => navigate("/ingreso-arriendo"),
            (msg) => setError(msg)
        );
    };

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-lg border-0">
                    <div className="card-body p-4">
                        <h2 className="card-title text-center mb-4 text-primary">Iniciar Sesión</h2>
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
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => navigate("/crear-usuario")}
                                >
                                    Crear Usuario
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
