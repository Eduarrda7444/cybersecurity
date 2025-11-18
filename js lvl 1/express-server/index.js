const express = require('express');
const app = express();
const port = 8080;

// rota home
app.get('/', (req, res) => {
  res.send('pagina inicial');
});

// rota login
app.get('/login', (req, res) => {
  res.send('rota de login');
});

// rota dashboard
app.get('/dashboard', (req, res) => {
  res.send('rota de dashboard');
});

// rota admin
app.get('/admin', (req, res) => {
  res.send('rota do admin');
});

// inicia o servidor
app.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`);
});