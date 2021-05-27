import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis excepturi totam nobis, illo minima ab?';

const MovieItem = ({ movie }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                    <Link to={`/movies/${movie.imdbID}`} className={classes.link}>
                        <CardMedia className={classes.cardMedia} title='image' image={movie.Poster} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{movie.Title} </Typography>
                            <Typography variant="subtitle1" component="p">{lorem} </Typography>
                        </CardContent>
                    </Link>
                    <CardActions>
                        <Button className={classes.rating} variant='outlined' size="small" color="secondary">
                            <Typography variant='h6' align='left'>{movie.Year}</Typography>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default MovieItem;
