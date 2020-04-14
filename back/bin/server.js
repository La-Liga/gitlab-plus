const app = require('../src/app');
const http = require('http');

require('dotenv').config();

const port = process.env.PORT;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log('Server rodando na porta ' + port);