const express = require('express')
const livroRouter = require('./router/livro_router');
const clientesRouter = require('./router/cliente_router');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

app.use('/api/livros', livroRouter);
app.use('/api/clientes',clientesRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})