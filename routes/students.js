const express = require('express');
const router = express.Router();

// GET - Obter lista de estudantes
router.get('/', (req, res) => {
  res.send('Lista de estudantes.');
});

// POST - Adicionar um novo estudante
router.post('/', (req, res) => {
  const student = req.body;
  res.send(`Estudante ${student.name} foi adicionado com sucesso!`);
});

// PUT - Atualizar informações de um estudante
router.put('/:id', (req, res) => {
  const studentId = req.params.id;
  const updatedData = req.body;
  res.send(`Estudante com ID ${studentId} foi atualizado com os dados: ${JSON.stringify(updatedData)}`);
});

// DELETE - Remover um estudante
router.delete('/:id', (req, res) => {
  const studentId = req.params.id;
  res.send(`Estudante com ID ${studentId} foi removido.`);
});

module.exports = router;
