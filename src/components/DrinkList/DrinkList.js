import React from 'react';
import { Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './DrinkList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    textAlign: 'center',
    margin: 20,
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const DrinkList = (props) => {
  const classes = useStyles();

  const drinks = () => {
    if (!Array.isArray(props.drinks)) {
      return <Typography variant="subtitle1">{props.drinks}</Typography>;
    } else {
      return props.drinks.map((drink, index) => {
        return (
          <Link to={'drink/' + drink.name} className="link" key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia image={drink.image} title={drink.name} className={classes.media} />
                <CardContent>
                  <Typography variant="h6">{drink.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      });
    }
  };

  return <div className="drinks">{drinks()}</div>;
};

export default DrinkList;
