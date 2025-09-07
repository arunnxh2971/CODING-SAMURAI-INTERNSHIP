const express = require('express');
const router = express.Router();

// Static product data (same as frontend)
const clothesData = [
  { id: 1, name: "Denim Jeans", price: 49.99, image: "/assets/denim.jpeg" },
  { id: 2, name: "Casual Shirt", price: 29.99, image: "/assets/casual.jpeg" },
  { id: 3, name: "Graphic Tee", price: 19.99, image: "/assets/graphic.jpg" },
  { id: 4, name: "Formal Shirt", price: 39.99, image: "/assets/formal.webp" },
  { id: 5, name: "Winter Jacket", price: 59.99, image: "/assets/winter.jpeg" },
  { id: 6, name: "Sport Jacket", price: 44.99, image: "/assets/sport.jpeg" },
  { id: 7, name: "Ferrari Jacket", price: 99.99, image: "/assets/ferrarijacket.jpg" },
  { id: 8, name: "Hoodie", price: 24.99, image: "/assets/hood.webp" },
  { id: 9, name: "Vintage Jacket", price: 54.99, image: "/assets/vintage.jpeg" },
  { id: 10, name: "Vintage Jacket 2", price: 57.99, image: "/assets/vintage2.jpeg" }
];

const watchesData = [
  { id: 1, name: "Analog Watch", price: 99.99, image: "/assets/analog.jpeg" },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/assets/smartwatch.jpg" },
  { id: 3, name: "Sports Watch", price: 149.99, image: "/assets/sportswatch.jpeg" },
  { id: 4, name: "Luxury Watch", price: 299.99, image: "/assets/lux.jpeg" },
  { id: 5, name: "Digital Watch", price: 89.99, image: "/assets/dig.jpeg" },
  { id: 6, name: "Watch", price: 79.99, image: "/assets/watch.jpeg" },
  { id: 7, name: "Min Watch", price: 59.99, image: "/assets/min.jpg" },
  { id: 8, name: "Vintage Watch", price: 129.99, image: "/assets/vintage.jpeg" }
];

// Combine all products for /api/products
const allProducts = [
  ...clothesData.map(product => ({ ...product, category: 'clothes' })),
  ...watchesData.map(product => ({ ...product, category: 'watches' }))
];

// GET all products
router.get('/', (req, res) => {
  res.json(allProducts);
});

// GET product by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = allProducts.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
