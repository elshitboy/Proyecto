export default function Estadisticas(){
    return(
        <div className="container-fluid bg-info">
        <div className="row">
            <div className="col">
              <h1 className="text-center">Estadisticas</h1>
            </div>
        </div>
        {/* <!-- Primera card con tabla--> */}
        <div className="row mx-auto p-1 my-auto p-1">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary opacity-85">
                Estadisticas por Tipo
              </div>
                <div className="card-body">
                <h6 className="card-title">Resumen de arriendos</h6>
                {/* <!-- tbala de vehiculos --> */}
                    <table className="table table-striped-columns">
                        <thead>
                          <tr>
                            <th scope="col">Tipo vehiculo</th>
                            <th scope="col">Veces arrendado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sedan</td>
                            <td><span className="badge bg-success rounded-pill">1</span></td>                            
                          </tr>
                          <tr>
                            <td>SUV</td>
                            <td><span className="badge bg-success rounded-pill">4</span></td>                            
                          </tr>
                          <tr>
                            <td>Camioneta</td>
                            <td><span className="badge bg-success rounded-pill">7</span></td>                            
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