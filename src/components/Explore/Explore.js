import React, { useState } from 'react';
import './Explore.css';
import Drinks from '../../data/drinks.json';
import DrinkList from '../DrinkList/DrinkList';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(3),
  },
}));

const Explore = () => {
  const classes = useStyles();
  const drinks = Drinks.cocktails;
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');

  const searchDrinks = (e) => {
    e.preventDefault();
    console.log(e);
    setResult([drinks[5], drinks[1], drinks[2], drinks[3], drinks[4]]);
  };

  return (
    <React.Fragment>
      <Typography variant="h1" className="headline" align="center" color="secondary">
        Find your favourite drink!
      </Typography>
      <div className="search-form">
        <form>
          <TextField label="Search" variant="outlined" className="search-field" fullWidth onChange={setSearch} />
          <Button
            variant="contained"
            color="primary"
            onClick={searchDrinks}
            className={classes.margin}
            disabled={search === ''}
          >
            Search
          </Button>
        </form>
      </div>

      <DrinkList drinks={result} />
    </React.Fragment>
  );
};

export default Explore;
