import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MovieIcon from '@material-ui/icons/Movie';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import useStyles from './styles';

export default function AddMovie() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [overview, setOverview] = useState('');

    const [titleError, setTitleError] = useState(false);
    const [ratingError, setRatingError] = useState(false);
    const [imageURLError, setImageURLError] = useState(false);
    const [overviewError, setOverviewError] = useState(false);

    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setRatingError(false);
        setImageURLError(false);
        setOverviewError(false);

        if (title === '') {
            setTitleError(true);
        }
        if (rating === '') {
            setRatingError(true);
        }
        if (imageURL === '') {
            setImageURLError(true);
        }
        if (overview === '') {
            setOverviewError(true);
        }
        if (title && rating && imageURL && overview) {
            fetch('http://localhost:8000/movies', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: title, rating, imageURL, overview })
            }).then(() => history.push('/'));
        }
    };

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography> This feature is not in use in this version of app.</Typography>
                        <Avatar className={classes.avatar}><MovieIcon /></Avatar>
                        <Typography component="h1" variant="h5">Movie Details</Typography>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                onChange={(e) => setTitle(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Title"
                                name="title"
                                autoFocus
                                error={titleError}
                            />
                            <TextField
                                onChange={(e) => setRating(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="rating"
                                label="Rating"
                                id="rating"
                                error={ratingError}
                            />
                            <TextField
                                onChange={(e) => setImageURL(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="imageURL"
                                label="Image URL"
                                id="imageURL"
                                error={imageURLError}
                            />
                            <TextField
                                onChange={(e) => setOverview(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="overview"
                                label="Overview"
                                id="overview"
                                multiline
                                error={overviewError}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Add Movie
                        </Button>
                            <div>
                                <Link className={classes.homeButton} to='/'>
                                    <Button startIcon={<ArrowLeftIcon />}>Back to Homepage</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
