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

  return (
    <div className="drinks">
      {props.drinks.map((drink, index) => {
        return (
          <Link to={'drink/' + index}>
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia image={drink.image} title={drink.name} className={classes.media} />
                <CardContent>
                  <Typography variant="h4">{drink.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default DrinkList;
