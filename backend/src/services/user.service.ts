import User from "../database/models/user";
import UserCompany from "../database/models/userCompany";
import { ErrorTypes } from "../errors/catalog";
import { IUser } from "../interfaces/IUser";

export interface IAuthService {
  getAll(): Promise<UserCompany[]>
}

export default class UserService implements IAuthService {

  async create({ name, email, phone, dateOfBirth, cityOfBirth }: IUser) {
    const result = await User.create({ name, email, phone, dateOfBirth, cityOfBirth });

    const user = result.get();

    return { user };
  }

  async getAll() {
    const users = await UserCompany.findAll();
    // const users = await UserCompany.findAll({ include: [{ model: User, as: 'users' }, { model: Company, as: 'companies' }] });
    return users;
  }

  async getById(id: number) {
    const user = await User.findByPk(id);
    return user;
  }

  async updateById(id: number, update: IUser) {
    const result = await User.update(update, { where: { id } });
    if (!result) throw Error(ErrorTypes.UserNotFound);
  }

  async deleteById(id: number) {
    const result = await User.destroy({ where: { id } });
    if (!result) throw Error(ErrorTypes.UserNotFound);
  }
}
