// Importar a biblioteca Express
const express = require('express');
const app = express();
const localhost = '127.0.0.1';
const port = 5000;

// Importar as rotas
const teacherRoutes = require('./routes/teachers');
const studentRoutes = require('./routes/students');

// Middleware para processar JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de gerenciamento escolar!');
});

// Configurar as rotas
app.use('/teachers', teacherRoutes);
app.use('/students', studentRoutes);

// Rodar o servidor
app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}`);
});