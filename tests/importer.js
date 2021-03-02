const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

module.exports = async (callback) => {
  jest.setTimeout(1000000);
  const importer = new Importer(
    { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME }
  );
  const sequelize = new Sequelize(
    `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.HOSTNAME}:3306/northwind`
  );
  callback(importer, sequelize);
}