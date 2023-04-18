import { describe } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Service } from '../../services';
import { faker } from '@faker-js/faker';
import User from '../../database/models/user';
import { ErrorTypes } from '../../errors/catalog';

describe('Service', () => {
  const service = new Service(User);

  const user = {
    id: 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number('(##) #####-####'),
    dateOfBirth: faker.date.birthdate(),
    cityOfBirth: faker.address.city(),
    createdAt: faker.date.birthdate(),
    updatedAt: faker.date.birthdate(),
  }

  const users = [ user, user, user ]; 

  before(() => {
    User.create = sinon.fake.resolves({ user, get: () => user } as any);
    User.findAll = sinon.fake.resolves(users as any);
    User.findByPk = sinon.fake.resolves({ user, get: () => user } as any);
    sinon.stub(User, 'update').onCall(0).resolves([1]).onCall(1).resolves([0]);
    User.destroy = sinon.fake.resolves(1);
  })

  after(() => sinon.restore())

  describe('create', () => {
    it('successfully', async () => {
      const result = await service.create(user as any);

      expect(result).to.be.deep.equal(user);
    });
  });

  describe('getAll', () => {
    it('successfully', async () => {
      const result = await service.getAll();

      expect(result).to.be.deep.equal(users);
    });
  });

  describe('getById', () => {
    it('successfully', async () => {
      const result = await service.getById(user.id);

      expect(result).to.be.deep.equal(user);
    });

    it('failure: Entity not found', async () => {
      User.findByPk = sinon.fake.resolves(null);
      let error;
      try {
        await service.getById(user.id);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('updateById', () => {
    it('successfully', async () => {
      User.findByPk = sinon.fake.resolves({ user, get: () => user } as any);
      const result = await service.updateById(user.id, user as any);

      expect(result).to.be.deep.equal(user);
    });

    it('failure: Entity not found', async () => {
      let error;
      try {
        await service.updateById(user.id, user as any);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('deleteById', () => {
    it('successfully', async () => {
      let error;
      try {
        await service.deleteById(user.id);
      } catch(err: any) {
        error = err
      }

      expect(error).to.be.undefined;
    });

    it('failure: Entity not found', async () => {
      User.destroy = sinon.fake.resolves(0);
      let error;
      try {
        await service.deleteById(user.id);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });
});