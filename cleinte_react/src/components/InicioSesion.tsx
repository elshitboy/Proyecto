// src/components/InicioSesion.tsx
import { type FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Inicio de Sesión</h1>
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ingrese sus datos</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="txtemail" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="txtemail"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="txtpassword" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="txtpassword"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <div className="mb-3 text-end gap-3 d-grid d-lg-block">
                                        <Link to="/login/recover" className="btn btn-warning me-2">
                                            Restablecer Contraseña
                                        </Link>
                                        <button type="submit" className="btn btn-primary">Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
