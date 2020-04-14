const express = require('express');

const app = express();

// carrega as rotas
const index = require('./routes/index-route');
const dashboard = require('./routes/dashboard-route');

app.use('/', index);
app.use('/dashboard', dashboard)

module.exports = app;