// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MyBills from './components/MyBills';
import Items from './components/Items';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mybills" element={<MyBills />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
