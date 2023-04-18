import { DataTypes, Model } from 'sequelize';
import db from '.';
import { z } from 'zod';

export const CompanyZodSchema = z.object({
  name: z.string().min(6),
  cnpj: z.string().min(14),
  address: z.string().min(6),
  city: z.string().min(6),
  state: z.string().min(2),
});

export default class Company extends Model {
  public id!: number;
  public name!: string;
  public cnpj!: string;
  public address!: string;
  public city!: string;
  public state!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Company.init({
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
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'companies',
  tableName: 'companies',
});
