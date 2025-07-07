import { Column, Table, Model, DataType} from "sequelize-typescript"


@Table({ tableName: 'usuarios' })
class Usuario extends Model {
    @Column({ type: DataType.STRING(50), primaryKey: true, allowNull: false, validate : { isEmail: true } })
    declare email: string;

    @Column({type: DataType.STRING(60),allowNull: false})
    declare password: string;
}
export default Usuario