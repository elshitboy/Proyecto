export default function Devolucion() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col">
              <h1 className="text-center">Vehiculos Arrendados</h1>
            </div>
        </div>
        {/* <!-- Primera card con tabla--> */}
        <div className="row mx-auto p-1 my-auto p-1">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary opacity-85">
                Vehiculos Arrendados
              </div>
                <div className="card-body">
                <h6 className="card-title">Seleccione un vehiculo para su devolucion</h6>
                {/* <!-- tbala de vehiculos --> */}
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Patente</th>
                            <th scope="col">Tipo Vehiculo</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>UK5931</td>
                            <td>Sedan</td>
                            <td><span className="badge bg-success rounded-pill">Activo</span></td>
                            <td><button className="btn btn-warning" type="submit">Devolucion</button></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>CK3439</td>
                            <td>SUV</td>
                            <td><span className="badge bg-danger rounded-pill">Terminado</span></td>
                            <td><button className="btn btn-danger" type="submit">Eliminar</button></td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
        </div>
       </div>
    )
}