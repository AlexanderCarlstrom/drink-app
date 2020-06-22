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
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');

  // loop through all drinks and see if any of them matches the search
  const searchDrinks = (e) => {
    e.preventDefault();
    const searchResults = [];

    Drinks.cocktails.map((drink) => {
      if (drink.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
        searchResults.push(drink);
      }
    });

    // if no drinks were found - set result to a string
    if (searchResults.length === 0) {
      setResult('No Drinks Found');
    } else {
      setResult(searchResults);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h1" className="headline" align="center" color="secondary">
        Find your favourite drink!
      </Typography>
      <div className="search-form">
        <form onSubmit={searchDrinks}>
          <TextField
            label="Search"
            variant="outlined"
            className="search-field"
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
          />
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
