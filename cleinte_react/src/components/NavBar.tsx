import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Gestion de Vehiculo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to ="ingreso-arriendo" className="nav-link">Ingreso arriendo</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to ="devolucion" className="nav-link">Devolucion Arriendo</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Registros de arriendos</a>
                </li>
                <li className="nav-item">
                    <NavLink to ="devolucion" className="nav-link">Categorias y estadisticas</NavLink>
                </li>
                </ul>
                <a href="login" className="btn btn-primary">Cerrar sesion</a>
                {/* <button className="btn btn-danger" type="submit">Cerrar Sesion</button> */}
            </div>
            </div>
        </nav>
    )
}