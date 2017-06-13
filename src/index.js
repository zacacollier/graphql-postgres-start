const Sequelize = require('sequelize');

const seq = new Sequelize('blog', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

seq
  .authenticate()
  .then(() => {
    // eslint-disable-next-line
    console.log('Connected');
  })
  .catch(err => {
    // eslint-disable-next-line
    console.error(`Error connecting to database: ${err}`);
  });
