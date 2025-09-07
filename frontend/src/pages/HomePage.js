import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';

// Clothes products (10 items)
const clothesData = [
  { id: 1, name: "Denim Jacket", price: 49.99, image: "/assets/denim.jpeg" },
  { id: 2, name: "Casual Shirt", price: 29.99, image: "/assets/casual.jpeg" },
  { id: 3, name: "Graphic Tee", price: 19.99, image: "/assets/graphic.jpg" },
  { id: 4, name: "Formal Shirt", price: 39.99, image: "/assets/formal.webp" },
  { id: 5, name: "Winter Jacket", price: 59.99, image: "/assets/winter.jpeg" },
  { id: 6, name: "Sport Jacket", price: 44.99, image: "/assets/sport.jpeg" },
  { id: 7, name: "Ferrari Jacket", price: 99.99, image: "/assets/ferrarijacket.jpg" },
  { id: 8, name: "Hoodie", price: 24.99, image: "/assets/hood.webp" },
];

// Watches products (8 items)
const watchesData = [
  { id: 1, name: "Analog Watch", price: 99.99, image: "/assets/analog.jpeg" },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/assets/smartwatch.jpg" },
  { id: 3, name: "Sports Watch", price: 149.99, image: "/assets/sportswatch.jpeg" },
  { id: 4, name: "Luxury Watch", price: 299.99, image: "/assets/lux.jpeg" },
  { id: 5, name: "Digital Watch", price: 89.99, image: "/assets/dig.jpeg" },
  { id: 6, name: "Watch", price: 79.99, image: "/assets/watch.jpeg" },
  { id: 7, name: "Min Watch", price: 59.99, image: "/assets/min.jpg" },

];

const HomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <HeroBanner />
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#1976d2' }}>
        Clothes
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 5 }}>
        {clothesData.length === 0 ? (
          <Typography variant="h6" color="textSecondary" sx={{ marginLeft: 2 }}>
            No clothes available.
          </Typography>
        ) : (
          clothesData.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#1976d2' }}>
        Watches
      </Typography>
      <Grid container spacing={3}>
        {watchesData.length === 0 ? (
          <Typography variant="h6" color="textSecondary" sx={{ marginLeft: 2 }}>
            No watches available.
          </Typography>
        ) : (
          watchesData.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;