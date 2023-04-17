import { STRING, INTEGER, DATEONLY, Model } from 'sequelize';
import db from '.';

export default class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public dateOfBirth!: Date;
  public cityOfBirth!: string;
}

User.init({
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
  phone: {
    type: STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DATEONLY,
    allowNull: false,
  },
  cityOfBirth: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Users',
  tableName: 'users',
});
