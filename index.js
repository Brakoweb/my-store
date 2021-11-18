const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler.js');
const app = express();
const port = 6969;
app.use(express.json());

app.get('/', (req,res) => {
  res.send('Hola soy un server en Express');
});

app.get('/culo', (req,res) => {
  res.send('Soy un culo');
});

app.get('/people', (req,res) => {
  res.json([
    {
      name: 'gabriel',
      edad: 27
    },
    {
      name: 'kokiko',
      edad: 29
    }
  ]);
});

app.get('/people/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'gabriel',
    edad: 27
  });
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port: ${port}`);
});
