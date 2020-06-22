import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Drinks from '../../data/drinks.json';
import './Drink.css';

const Drink = () => {
  const name = useParams().name;
  const drink = Drinks.cocktails.find((drink) => drink.name === name);
  return (
    <Paper square className="drink">
      <div className="info">
        <Typography variant="h4" className="name">
          {drink.name}
        </Typography>
        <Typography variant="subtitle1" className="preparation">
          {drink.preparation}
        </Typography>
      </div>
      <img src={drink.image} className="image" alt={drink.name} />
    </Paper>
  );
};

export default Drink;
