import { STRING, INTEGER, DATEONLY, Model } from 'sequelize';
import db from '.';
import Company from './company';
import UserCompany from './userCompany';

export default class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public dateOfBirth!: Date;
  public cityOfBirth!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    allowNull: true,
  },
  dateOfBirth: {
    type: DATEONLY,
    allowNull: true,
  },
  cityOfBirth: {
    type: STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  tableName: 'users',
});

User.belongsToMany(Company, {
  through: UserCompany,
  foreignKey: 'company_id',
  otherKey: 'user_id',
});
Company.belongsToMany(User, {
  through: UserCompany,
  foreignKey: 'user_id',
  otherKey: 'company_id',
});