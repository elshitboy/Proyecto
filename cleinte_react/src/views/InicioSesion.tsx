export default function InicioSesion(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Inicio de Sesión</h1>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Ingrese sus datos
                                        </h5>
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="txtemail" className="form-label">Email</label>
                                                <input type="text" id="txtemail" className="form-control"/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="txtpassword" className="form-label">Password</label>
                                                <input type="password" id="txtpassword" className="form-control"/>
                                            </div>
                                            <div className="mb-3    text-end gap-3 d-grid d-lg-block">
                                                <button type="reset" className="btn btn-warning">Restablecer Constraseña</button>
                                                <button type="submit" className="btn btn-primary">Ingresar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}