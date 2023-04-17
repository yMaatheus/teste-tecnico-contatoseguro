import User from "../database/models/user";

export interface IAuthService {
  getAll(): Promise<User[]>
}

export default class UserService implements IAuthService {
  async getAll(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }
}
