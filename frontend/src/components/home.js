// src/components/Home.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Home = () => {
  const handleMakeBill = () => {
    // Navigate to billing page
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Plumbing Billing System
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleMakeBill}
      >
        Let's Make a Bill
      </Button>
    </Container>
  );
};

export default Home;
