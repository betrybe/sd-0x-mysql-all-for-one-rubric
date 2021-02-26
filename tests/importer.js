const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

module.exports = async () => {
  jest.setTimeout(100000);
  const importer = new Importer(
    { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME }
  );

  await importer.import('./northwind.sql');

  importer.disconnect();

  return new Sequelize(
    `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.HOSTNAME}:3306/northwind`
  );
}