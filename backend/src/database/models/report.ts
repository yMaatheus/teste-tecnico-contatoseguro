import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class User extends Model {
  public userId!: number;
  public companyId!: number;
  public description!: string;
}

User.init({
  userId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  companyId: {
    type: INTEGER,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Reports',
  tableName: 'reports',
});
