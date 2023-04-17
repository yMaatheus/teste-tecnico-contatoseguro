import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

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
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  cnpj: {
    type: STRING,
    allowNull: false,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  city: {
    type: STRING,
    allowNull: false,
  },
  state: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'companies',
  tableName: 'companies',
});
