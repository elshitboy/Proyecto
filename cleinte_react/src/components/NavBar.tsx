import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-uppercase" to="/ingreso-arriendo">
          Gestión Vehicular
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/ingreso-arriendo" className="nav-link">
                Ingreso Arriendo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/devolucion" className="nav-link">
                Devolución Arriendo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registros" className="nav-link">
                Registros de Arriendos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/estadisticas" className="nav-link">
                Categorías y Estadísticas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login/recover" className="nav-link">
                Cambiar Contraseña
              </NavLink>
            </li>
          </ul>

          <Link to="/" className="btn btn-outline-danger">
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}
