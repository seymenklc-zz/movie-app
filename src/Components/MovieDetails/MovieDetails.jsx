import React from 'react';
import { useHistory, useParams } from 'react-router';

import { Container, LinearProgress, Grid, Button, CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';
import useFetch from '../hooks/useFetch';

const MovieDetails = () => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const { data: movie, isPending } = useFetch('http://localhost:8000/movies/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/movies/' + id, {
            method: 'DELETE'
        }).then(() => history.push('/'));
    };


    return (
        <>
            {isPending && <LinearProgress />}
            <Typography> This feature is not in use in this version of app.</Typography>
            <Container>
                <Grid container spacing={6} xs={12} sm={6} md={4}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image={movie.imageURL} title="movie" />
                            <CardContent>
                            </CardContent>
                            <CardActions>
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    color='secondary'
                                    startIcon={<DeleteIcon />}
                                    onClick={handleDelete}
                                >
                                    Delete
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MovieDetails;