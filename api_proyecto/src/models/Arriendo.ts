import { Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({tableName: 'arriendos'})
class Arriendo extends Model{
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false})
    declare id: number

    @Column({type: DataType.DATE, allowNull: false, field: 'fecha_inicio'})
    declare fechainicio: Date

    @Column({type: DataType.DATE, allowNull: true, field: 'fecha_termino'})
    declare fechatermino: Date | null

    @Column({type: DataType.STRING(6), field: 'patente_vehiculo'})
    declare patentevehiculo: string

    @Column({type: DataType.STRING(20), field: 'tipo_vehiculo'})
    declare tipovehiculo: string

    @Column({type: DataType.STRING(10), field:'rut_cliente'})
    declare rutcliente: string

    @Column({type: DataType.STRING(20), field: 'nombre_cliente'})
    declare nombrecliente: string
}

export default Arriendo