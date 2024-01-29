// module.exports = function (req, res, next) {
//   const allowedCors = [
//     'https://praktikum.tk',
//     'http://praktikum.tk',
//     'http://localhost:5173/',
//     'http://localhost:5173/',
//     'http://127.0.0.1:5173/',
//     'https://dobryi.nomoredomainsmonster.ru/',
//     'https://api.dobryi.nomoredomainsmonster.ru/',
//     'http://dobryi.nomoredomainsmonster.ru/',
//     'https://api.dobryi.nomoredomainsmonster.ru/',
//     'http://localhost:3000/users/me',
//     'http://localhost:3000/cards',
//     'http://localhost:5173/users/me',
//     'http://localhost:5173/cards',
//   ];

//   const { origin } = req.headers;

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Credentials', true);
//   }

//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//   if (req.method === 'OPTIONS') {
//     return res.status(204).end();
//   }

//   next();
// };
