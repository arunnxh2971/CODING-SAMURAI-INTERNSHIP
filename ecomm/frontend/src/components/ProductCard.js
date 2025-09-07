import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find(item => (item._id || item.id) === (product._id || product.id));
    if (!exists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Added to cart!');
    } else {
      alert('Product already in cart!');
    }
  };

  // Assign a random rating between 3.5 and 4.5 if not present
  const rating = product.rating || (Math.random() * (4.5 - 3.5) + 3.5);

  return (
    <Card
      sx={{
        maxWidth: 320,
        m: 2,
        borderRadius: 3,
        boxShadow: 8,
        transition: 'transform .2s, box-shadow .2s',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 12, borderColor: '#1976d2' },
        border: '2px solid #e3e3e3',
        background: 'linear-gradient(135deg, #f5faff 80%, #e3f2fd 100%)'
      }}
      elevation={4}
    >
        <CardMedia
  component="img"
  height="200"
  image={process.env.PUBLIC_URL + '/' + product.image}
  alt={product.name}
  sx={{
    objectFit: 'contain',
    background: '#f0f4f8',
    borderRadius: '16px 16px 0 0',
    boxShadow: 2,
    padding: 2
  }}
/>
      
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography gutterBottom variant="h6" sx={{ fontWeight: 700, color: '#1976d2' }}>
            {product.name}
          </Typography>
          {product.featured && <Chip label="Featured" color="secondary" size="small" sx={{ ml: 1 }} />}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.description || "High quality and stylish!"}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={rating} precision={0.1} readOnly size="small" />
          <Typography variant="caption" sx={{ ml: 1, color: '#555' }}>
            {rating.toFixed(1)}
          </Typography>
        </Box>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          size="small"
          component={Link}
          to={`/product/${product._id || product.id}`}
          sx={{
            color: '#1976d2',
            fontWeight: 600,
            textTransform: 'none'
          }}
        >
          View
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          sx={{
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            borderColor: '#1976d2'
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          sx={{
            ml: 1,
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            boxShadow: 2
          }}
          onClick={() => alert('Proceed to buy!')}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
