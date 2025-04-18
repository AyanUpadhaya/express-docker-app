const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Headphones' },
];

app.use(express.json());
app.use(cors());

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
