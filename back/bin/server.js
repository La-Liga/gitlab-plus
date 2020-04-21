const http = require('http');
const app = require('../src/app');

require('dotenv').config();

const port = process.env.PORT;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log(`Server rodando na porta ${port}`);
