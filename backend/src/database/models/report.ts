import { DataTypes, Model } from 'sequelize';
import db from '.';
import { z } from 'zod';
import User from './user';
import Company from './company';

export const ReportZodSchema = z.object({
  userId: z.number().positive(),
  companyId: z.number().positive(),
  description: z.string().min(6),
});

export default class Report extends Model {
  public userId!: number;
  public companyId!: number;
  public description!: string;
}

Report.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Reports',
  tableName: 'reports',
});

Report.hasMany(User, { foreignKey: 'user_id' });
Report.hasMany(Company, { foreignKey: 'company_id' });