import { DataTypes, Model } from 'sequelize';
import db from '.';
import { z } from 'zod';

export const AuthUserZodSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export default class Auth extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

Auth.init({
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Auth',
  tableName: 'auth',
});
