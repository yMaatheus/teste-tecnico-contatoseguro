'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('auth',
    [
      {
        id: 1,
        name: 'admin',
        email: 'admin@gmail.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // senha: secret_admin
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('auth', null, {});
  }
};
