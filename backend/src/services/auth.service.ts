import Auth from "../database/models/auth";
import { ErrorTypes } from "../errors/catalog";
import { IAuthUserJWT } from "../interfaces/IAuthUser";
import bcryptProvider from "../providers/bcrypt.provider";
import jwtProvider from "../providers/jwt.provider";

interface IToken {
  token: string,
  user: IAuthUserJWT
}

interface IRegisterAuthUser {
  name: string,
  email: string,
  password: string,
}

interface ILoginAuthUser {
  email: string,
  password: string,
}

export interface IAuthService {
  register({ name, email, password }: IRegisterAuthUser): Promise<IToken>
  login({ email, password }: ILoginAuthUser): Promise<IToken>
}

export default class AuthService implements IAuthService {

  async register({ name, email, password }: IRegisterAuthUser) {
    const passwordHash = await bcryptProvider.hashPassword(password);
    const authUser = await Auth.create({ name, email, password: passwordHash });
    const { password: _, ...user } = authUser.get();

    const token = jwtProvider.signUser(user);
    return { token, user };
  }

  async login({ email, password }: ILoginAuthUser) {
    const authUser = await Auth.findOne({ where: { email } });
    if (!authUser) throw Error(ErrorTypes.UserNotFound);

    const { password: passwordHash, ...user } = authUser.get();

    await bcryptProvider.comparePassword(password, passwordHash);

    const token = jwtProvider.signUser(user);
    return { token, user };
  }
}