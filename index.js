const express = require('express');
const faker = require('faker');
const app = express();
const port = 6969;

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

app.get('/products', (req,res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  res.json(products);
})

app.listen(port, () => {
  console.log(`My port: ${port}`);
});
