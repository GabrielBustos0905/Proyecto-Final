const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config();
const { PORT } = process.env

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at', PORT); // eslint-disable-line no-console
  });
});
