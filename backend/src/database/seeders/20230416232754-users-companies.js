'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users_companies',
    [
      {
        user_id: 1,
        company_id: 2
      },
      {
        user_id: 1,
        company_id: 3
      },
      {
        user_id: 1,
        company_id: 4
      },
      {
        user_id: 2,
        company_id: 1
      },
      {
        user_id: 2,
        company_id: 3
      },
      {
        user_id: 3,
        company_id: 5
      },
      {
        user_id: 4,
        company_id: 3
      },
      {
        user_id: 4,
        company_id: 4
      },
      {
        user_id: 4,
        company_id: 5
      },
      {
        user_id: 5,
        company_id: 5
      },
      {
        user_id: 6,
        company_id: 1
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users_companies', null, {});
  }
};
