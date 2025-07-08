import { date, number, object, string, array, type InferOutput} from "valibot";

export const ArriendoActivoSchema = object({
    id:number(),
    fechaInicio:date(),
    fehcaTermino:date(),
    patenteVehiculo:string(),
    tipoVehiculo:string(),
    rutCliente:string(),
    nombreCliente:string(),

})

export const ArriendosActivosShcema = array(ArriendoActivoSchema)

//Type
export type ArriendosActivos = InferOutput <typeof ArriendoActivoSchema>