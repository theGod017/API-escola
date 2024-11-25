const express = require('express');
const router = express.Router();

// GET - Obter lista de professores
router.get('/', (req, res) => {
  res.send('Lista de professores.');
});

// POST - Adicionar um novo professor
router.post('/', (req, res) => {
  const teacher = req.body;
  res.send(`Professor ${teacher.name} foi adicionado com sucesso!`);
});

// PUT - Atualizar informações de um professor
router.put('/:id', (req, res) => {
  const teacherId = req.params.id;
  const updatedData = req.body;
  res.send(`Professor com ID ${teacherId} foi atualizado com os dados: ${JSON.stringify(updatedData)}`);
});

// DELETE - Remover um professor
router.delete('/:id', (req, res) => {
  const teacherId = req.params.id;
  res.send(`Professor com ID ${teacherId} foi removido.`);
});

module.exports = router;
