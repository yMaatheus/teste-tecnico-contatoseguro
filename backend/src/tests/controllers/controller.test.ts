import { describe } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { StatusCodes } from 'http-status-codes';
import User from '../../database/models/user';
import { Service } from '../../services';
import { Controller } from '../../controllers';

describe('Controller', () => {
  const service = new Service(User);
  const controller = new Controller(service);
  const req = {} as Request;
  const res = {} as Response;

  const user = {
    id: 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number('(##) #####-####'),
    dateOfBirth: faker.date.past(),
    cityOfBirth: faker.address.city(),
  };

  const users = [user, user, user];

  before(() => {
    sinon.stub(service, 'create').resolves(user);
    sinon.stub(service, 'getAll').resolves(users);
    sinon.stub(service, 'getById').resolves(user);
    sinon.stub(service, 'updateById').resolves(user);
    sinon.stub(service, 'deleteById').resolves();

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

  describe('create', () => {
    it('successfully', async () => {
      req.body = { ...user };
      await controller.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.CREATED)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(user)).to.be.true;
    });
  });

  describe('getAll', () => {
    it('successfully', async () => {
      await controller.getAll(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(users)).to.be.true;
    });
  });

  describe('getById', () => {
    it('successfully', async () => {
      req.params = { id: `${user.id}` };
      await controller.getById(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(user)).to.be.true;
    });
  });

  describe('updateById', () => {
    it('successfully', async () => {
      req.params = { id: `${user.id}` };
      await controller.updateById(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(user)).to.be.true;
    });
  });

  describe('deleteById', () => {
    it('successfully', async () => {
      req.params = { id: `${user.id}` };
      await controller.deleteById(req, res);

      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.end as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});