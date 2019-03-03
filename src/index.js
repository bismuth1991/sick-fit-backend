require('dotenv').config({ path: 'variable.env' });
const createServer = require('./createServer');
// const db = require('./db');

const server = createServer();

server.start({
  credential: true,
  cors: process.env.FRONTEND_URL,
}, (deets) => {
  // eslint-disable-next-line
  console.log(`Server is running on port http://localhost:${deets.port}`);
});
