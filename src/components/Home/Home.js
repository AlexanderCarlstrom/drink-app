import React from 'react';
import './Home.css';
import { Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Typography variant="h1" className="headline" align="center" color="textPrimary">
      Welcome to the cocktail explorer
    </Typography>
  );
};

export default Home;
