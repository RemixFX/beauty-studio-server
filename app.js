const express = require('express');
require('dotenv').config();
const routes = require('./routes/index');

const { PORT = 3001 } = process.env;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('Сервер запущен'));