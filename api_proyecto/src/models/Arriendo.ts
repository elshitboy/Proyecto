import { Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({tableName: 'arriendos'})
class Arriendo extends Model{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false})
    declare id: number

    @Column({type: DataType.DATEONLY, allowNull: false, field: 'fecha_inicio'})
    declare fechaInicio: Date

    @Column({type: DataType.DATEONLY, allowNull: true, field: 'fecha_termino'})
    declare fechaTermino: Date | null

    @Column({type: DataType.STRING(6), field: 'patente_vehiculo'})
    declare patenteVehiculo: string

    @Column({type: DataType.STRING(20), field: 'tipo_vehiculo'})
    declare tipoVehiculo: string

    @Column({type: DataType.STRING(10), field:'rut_cliente'})
    declare rutCliente: string

    @Column({type: DataType.STRING(20), field: 'nombre_cliente'})
    declare nombreCliente: string
}

export default Arriendo