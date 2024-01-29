const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
require('dotenv').config();
// const cors = require('cors');
const router = require('./routers/index');
// const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use(express.json());
// app.use(cors);
// app.use(requestLogger);
// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервth сейчас упадёт');
//   }, 0);
// });
app.use(router);
// app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'Ошибка на стороне сервера' : message });
  next();
});

app.listen(3000, () => {
  console.log('Port 3000');
});
