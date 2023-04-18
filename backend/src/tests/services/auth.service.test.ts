import { describe } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { AuthService } from '../../services';
import Auth from '../../database/models/auth';
import { faker } from '@faker-js/faker';
import bcryptProvider from '../../providers/bcrypt.provider';
import jwtProvider from '../../providers/jwt.provider';
import { ErrorTypes } from '../../errors/catalog';

describe('Auth Service', () => {
  const service = new AuthService();

  const password = faker.internet.password();

  const authUser = {
    id: 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    createdAt: faker.date.birthdate(),
    updatedAt: faker.date.birthdate(),
  }

  const token = 'MEU_TOKEN';

  beforeEach(() => {
    sinon.stub(bcryptProvider, 'hashPassword').resolves(password);
    sinon.stub(bcryptProvider, 'comparePassword').resolves(true);
    sinon.stub(jwtProvider, 'signUser').returns(token);
  })

  afterEach(() => sinon.restore())

  describe('register', () => {
    it('successfully', async () => {
      Auth.create = sinon.fake.resolves({ ...authUser, get: () => authUser } as any);
      const result = await service.register({ ...authUser, password });

      expect(result).to.be.deep.equal({ token, user: authUser });
    });
  });

  describe('login', () => {
    it('successfully', async () => {
      Auth.findOne = sinon.fake.resolves({ ...authUser, get: () => authUser } as any);
      const result = await service.login({ ...authUser, password });

      expect(result).to.be.deep.equal({ token, user: authUser });
    });

    it('failure: Email not found', async () => {
      Auth.findOne = sinon.fake.resolves(null);
      let error;
      try {
        await service.login({ ...authUser, password });
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EmailNotFound);
    });
  });
});