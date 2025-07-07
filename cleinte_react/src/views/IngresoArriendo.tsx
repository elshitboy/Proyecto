export default function IngresoArriendo() {
    return(
        <div className="row mx-auto p-1 my-auto p-1 bg-info">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary opacity-85">
                Vehiculos disponibles
              </div>
                <div className="card-body">
                <h6 className="card-title">Datos Arriendo</h6>
                  <form>
                    <fieldset>
                      <legend>Datos a ingresar:</legend>
                      <div className="mb-3">
                        <label className="form-label">Patente</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tipo de Vehiculo</label>
                        <select className="form-select">
                          <option>SUV</option>
                          <option>Camioneta</option>
                          <option>Sedan</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">RUT</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <button type="submit" className="btn btn-primary">Registrar</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
        </div>
    )
}