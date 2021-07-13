import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, LinearProgress, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import MovieItem from './MovieItem';

const MovieCard = ({ searchValue, truncateOverview }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const classes = useStyles();

    const getMovieRequest = async (searchValue) => {
        try {
            setIsLoading(true);
            const { data } = await axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`);
            if (data.Search) setMovies(data.Search);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div>
            {isLoading && <LinearProgress />}
            {searchValue === '' ? (
                <Typography style={{ marginTop: 100 }} color='error' variant='h4' align='center'>Search a movie!</Typography>
            ) : (
                <div>
                    <Container className={classes.main}>
                        <Grid container spacing={4} justify='center'>
                            {movies.map((movie) => (
                                <MovieItem
                                    key={movie.imdbID}
                                    movie={movie}
                                    truncateOverview={truncateOverview}
                                />
                            ))}
                        </Grid>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default MovieCard;;;;
