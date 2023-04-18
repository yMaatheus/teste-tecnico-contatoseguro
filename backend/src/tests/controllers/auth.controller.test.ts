import { describe } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { AuthService } from '../../services';
import { AuthController } from '../../controllers';
import jwtProvider from '../../providers/jwt.provider';
import { IAuthUserJWT } from '../../interfaces/IAuthUserJWT';
import { StatusCodes } from 'http-status-codes';

describe('Auth Controller', () => {
  const service = new AuthService();
  const controller = new AuthController(service);
  const req = {} as Request;
  const res = {} as Response;

  const login = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }

  const user: IAuthUserJWT = {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

  const token = jwtProvider.signUser(user);

  before(() => {
    sinon.stub(service, 'register').resolves({ token, user });
    sinon.stub(service, 'login').resolves({ token, user });

    res.status = sinon.stub().returns(res);
    res.cookie = sinon.stub().returns(res);
    res.clearCookie = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
    res.locals = {};
  });

  after(() => {
    sinon.restore()
  })

  describe('status', () => {
    it('successfully', async () => {
      res.locals.user = user;
      await controller.status(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ message: 'You are authenticated', user })).to.be.true;
    });
  });

  describe('register', () => {
    it('successfully', async () => {
      req.body = { ...login };
      await controller.register(req, res);

      expect((res.cookie as sinon.SinonStub).calledWith('token', token, { httpOnly: true, sameSite: 'strict' })).to.be.true;
      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.CREATED)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ user, message: 'Register successful' })).to.be.true;
    });
  });

  describe('login', () => {
    it('successfully', async () => {
      req.body = { ...login };
      await controller.login(req, res);

      expect((res.cookie as sinon.SinonStub).calledWith('token', token, { httpOnly: true, sameSite: 'strict' })).to.be.true;
      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ user, message: 'Login successful' })).to.be.true;
    });
  });

  describe('logout', () => {
    it('successfully', async () => {
      res.locals.user = user;
      await controller.logout(req, res);

      expect((res.clearCookie as sinon.SinonStub).calledWith('token')).to.be.true;
      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ message: 'Logout successful' })).to.be.true;
    });
  });
});