'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users_companies',
    [
      {
        user_id: 1,
        company_id: 2,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 1,
        company_id: 3,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 1,
        company_id: 4,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 2,
        company_id: 1,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 2,
        company_id: 3,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 3,
        company_id: 5,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 4,
        company_id: 3,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 4,
        company_id: 4,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 4,
        company_id: 5,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 5,
        company_id: 5,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        user_id: 6,
        company_id: 1,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users_companies', null, {});
  }
};
