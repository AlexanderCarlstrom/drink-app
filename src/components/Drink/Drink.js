import React from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Drinks from '../../data/drinks.json';

const Drink = () => {
  const id = useParams();
  const drink = Drinks[id];
  return (
    <div className="drink">
      <Typography variant="h4">{drink.name}</Typography>
      <Typography variant="subtitle1">{drink.preperation}</Typography>
    </div>
  );
};

export default Drink;
