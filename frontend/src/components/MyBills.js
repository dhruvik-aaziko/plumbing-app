// src/components/MyBills.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const MyBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Fetch old bills from the backend
    axios.get('http://localhost:4000/api/bills')
      .then(response => setBills(response.data))
      .catch(error => console.error('Error fetching bills:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Bills
      </Typography>
      <List>
        {bills.map(bill => (
          <ListItem key={bill._id}>
            <ListItemText
              primary={`Bill #${bill._id}`}
              secondary={`Date: ${new Date(bill.date).toLocaleDateString()}`}
            />
            <Button variant="outlined" color="primary">
              View
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MyBills;
