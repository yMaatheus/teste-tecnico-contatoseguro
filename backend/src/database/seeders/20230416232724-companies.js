'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies',
    [
      {
        id: 1,
        name: 'Stella e Beatriz Transportes Ltda',
        cnpj: '67.047.964/0001-66',
        address: 'Rua Afonso Silveira, 660 - Jardim Olympia',
        city: 'Jacareí',
        state: 'SP',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Stefany e Sueli Marketing ME',
        cnpj: '05.509.125/0001-65',
        address: 'Rua Tomé de Souza, 603 - Amizade',
        city: 'Araçatuba',
        state: 'SP',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'José e Roberto Telecom ME',
        cnpj: '77.469.552/0001-78',
        address: 'Rua Domingos de Ângelo, 754 - Vila Ianni',
        city: 'Itu',
        state: 'SP',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        name: 'Davi e Patrícia Publicidade e Propaganda ME',
        cnpj: '89.252.663/0001-07',
        address: 'Rua Cecília Aleixo Vaquero, 431 - Jardim Vale do Sol',
        city: 'Araçatuba',
        state: 'SP',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 5,
        name: 'Pedro e Carolina Pizzaria ME',
        cnpj: '58.573.749/0001-08',
        address: 'Rua Guaraciaba, 680 - Jardim Ismênia',
        city: 'São José dos Campos',
        state: 'SP',
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], { });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
