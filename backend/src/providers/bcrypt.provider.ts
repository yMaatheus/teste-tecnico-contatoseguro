import * as bcrypt from 'bcryptjs';
import { ErrorTypes } from '../errors/catalog';

const SALT_ROUNDS = 10;

class bcryptProvider {
  constructor(private saltRounds: number) { }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    if (!result) throw Error(ErrorTypes.WrongPassword);
    return result;
  }
}

export default new bcryptProvider(SALT_ROUNDS);