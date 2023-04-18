'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reports',
    [
      {
        id: 1,
        user_id: 1,
        company_id: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl.',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        user_id: 6,
        company_id: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nunc nisl eget nisl.',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('reports', null, {});
  }
};
