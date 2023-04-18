import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class UserCompany extends Model {
  public userId!: number;
  public companyId!: number;
}

UserCompany.init({
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  companyId: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    references: {
      model: 'companies',
      key: 'id',
    },
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'UserCompany',
  tableName: 'users_companies',
});
