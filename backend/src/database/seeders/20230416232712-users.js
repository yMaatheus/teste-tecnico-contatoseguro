'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Yarpen Zigrin',
        email: 'yarpen.zigrin@commerce.com',
        phone: '(77) 2654-0161',
        date_of_birth: '1990-01-01',
        city_of_birth: 'São José dos Pinhais - PR',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Arthur Dent',
        email: 'dent.arthur@gmail.com',
        phone: '(67) 98622-2795',
        date_of_birth: '1949-04-03',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Hurley Reyes',
        email: 'hurley.reyes@commerce.com',
        phone: '(61) 99634-0112',
        date_of_birth: '1974-08-20',
        city_of_birth: 'Olinda - PE',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        name: 'Franklin Clinton',
        email: 'clinton_gs.franklin@yahoo.com',
        phone: '(69) 97636-7208',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 5,
        name: 'Trevor Phillips',
        email: 'phillips.trevor@tpindustries.com',
        phone: '(27) 98524-8573',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 6,
        name: 'Carol Denvers',
        email: 'denvers.carol@commerce.com',
        phone: '(92) 97277-6762',
        date_of_birth: '1937-11-11',
        city_of_birth: 'Camaçari - BA',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
