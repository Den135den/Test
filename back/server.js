const express = require('express');
const app = express();
const port = 5000;

// Опрацювання кореневого шляху
app.get('/', (req, res) => {
  res.send({message:'Hello, World!2d'});
});

// Старт сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
