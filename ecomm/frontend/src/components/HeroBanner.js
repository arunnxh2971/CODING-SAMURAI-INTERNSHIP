import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroBanner = () => (
  <Box sx={{
    height: 180,
    background: 'linear-gradient(90deg, #1976d2 55%, #fff 100%)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    px: 4,
    mb: 3,
    borderRadius: '10px'
  }}>
    <Typography variant="h3" sx={{ fontWeight: 900 }}>
      Discover Awesome Deals!
    </Typography>
  </Box>
);

export default HeroBanner;
