import { DataTypes, Model } from 'sequelize';
import db from '.';
import { z } from 'zod';

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
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'company_id',
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
