const faker = require('faker');

module.exports = {
  // eslint-disable-next-line no-unused-vars, no-use-before-define
  up(queryInterface, Sequelize) { return queryInterface.bulkInsert('groups', generate50Groups(), {}); },
  // eslint-disable-next-line no-unused-vars
  down(queryInterface, Sequelize) { return queryInterface.bulkDelete('groups', null, {}); },
};

function generate50Groups() {
  const group = [];
  for (let i = 1; i <= 50; i += 1) {
    group.push({
      name: `${getRandomLetters()}${faker.random.number(60)}`, // eslint-disable-line no-unused-vars, no-use-before-define
      id_speciality: faker.random.number(10) + 1,
    });
  }
  return group;
}

function getRandomLetters() {
  const list = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 3; i += 1) {
    const rnd = Math.floor(Math.random() * list.length);
    result += list.charAt(rnd);
  }
  return result;
}