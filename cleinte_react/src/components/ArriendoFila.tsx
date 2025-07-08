import { Link } from "react-router-dom";
import type { ArriendosActivos } from "../types/Arriendos";

type ArriendoFilaProps ={
    arriendo:ArriendosActivos
}

export default function ArriendoFila({arriendo}:ArriendoFilaProps){
    return(
        <tr>
            <td>{arriendo.id}</td>
            <td>{arriendo.patenteVehiculo}</td>
            <td>{arriendo.tipoVehiculo}</td>
            <td>{arriendo.rutCliente}</td>
            <td>{arriendo.nombreCliente}</td>
            <td><span className="badge bg-success rounded-pill">Activo</span></td>
            <td><Link to="" className="btn btn-warning" type="submit">Devolucion</Link></td>
        </tr>
    )
}

    // id:number(),
    // fechaInicio:date(),
    // fehcaTermino:date(),
    // patenteVehiculo:string(),
    // tipoVehiculo:string(),
    // rutCliente:string(),
    // nombreCliente:string(),