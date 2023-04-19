import { DataTypes, Model } from 'sequelize';
import db from '.';
import Company from './company';
import UserCompany from './userCompany';
import { z } from 'zod';
import Report from './report';

export const UserZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  dateOfBirth: z.coerce.date().optional(),
  cityOfBirth: z.string().min(3).optional(),
}).strict();

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
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  cityOfBirth: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  tableName: 'users',
});

User.belongsToMany(Company, { through: UserCompany });
Company.belongsToMany(User, { through: UserCompany });

User.hasMany(Report, { foreignKey: 'userId', as: 'user' });
Report.belongsTo(User, { foreignKey: 'userId', as: 'user' });