import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, LinearProgress, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import FabIcon from '../Fab/Fab';
import MovieItem from './MovieItem';

const MovieCard = ({ searchValue }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const classes = useStyles();

    const getMovieRequest = async (searchValue) => {
        const { data } = await axios(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`);

        if (data.Search) setMovies(data.Search);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <>
            {isLoading && <LinearProgress />}
            {searchValue === '' ? (
                <Typography variant='h5' align='center'>Search a movie!</Typography>
            ) : (
                <>
                    <Container className={classes.main}>
                        <Grid container spacing={4} justify='center'>
                            {movies.map((movie) => (
                                <MovieItem key={movie.imdbID} movie={movie} />
                            ))}
                        </Grid>
                    </Container>
                    <FabIcon />
                </>
            )}
        </>
    );
};

export default MovieCard;;;;