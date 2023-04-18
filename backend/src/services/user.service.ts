import Company from "../database/models/company";
import User from "../database/models/user";
import { Service } from "./service";

export class UserService extends Service<User> {
  async getAll() {
    const users = await User.findAll({
      include: [{
        model: Company, as: 'companies', through: { attributes: [] }
      }]
    });
    return users;
  }
}
