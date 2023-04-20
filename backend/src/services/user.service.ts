import { Sequelize } from "sequelize";
import Company from "../database/models/company";
import User from "../database/models/user";
import UserCompany from "../database/models/userCompany";
import { Service } from "./service";
import db from '../database/models';
import { ErrorTypes } from "../errors/catalog";

export class UserService extends Service<User> {

  async create(body: Partial<User>) {
    try {
      const result = await db.transaction(async (t) => {
        const user = await User.create(body, { transaction: t });
        if (body.companies) {
          await UserCompany.bulkCreate(body.companies.map((id) => ({ userId: user.id, companyId: id })), { transaction: t });
        }
        return user;
      });

      return result.get();
    } catch (error) {
      throw Error(ErrorTypes.EntityCreationError)
    }
  }

  async getAll() {
    const users = await User.findAll({
      include: [{
        model: Company, as: 'companies', through: { attributes: [] }
      }]
    });
    return users;
  }
}
