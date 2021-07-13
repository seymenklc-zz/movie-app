import React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const MovieItem = ({ movie, truncateOverview }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} >
                <CardMedia className={classes.cardMedia} title='image' image={movie.Poster} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{truncateOverview(movie.Title, 23)}</Typography>
                    <Typography variant="subtitle1" component="p">Lorem ipsum dolor sit amet.</Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.rating} variant='outlined' size="small" color="secondary">
                        <Typography variant='h6' align='left'>{movie.Year}</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default MovieItem;
