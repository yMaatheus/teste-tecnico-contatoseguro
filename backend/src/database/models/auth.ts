import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class Auth extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

Auth.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Auth',
  tableName: 'auth',
});
