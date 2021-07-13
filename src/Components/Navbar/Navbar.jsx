import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, InputBase, Container } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';

import useStyles from './styles';

const Navbar = ({ searchValue, setSearchValue }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='sticky' color='secondary'>
                <Container>
                    <Toolbar>
                        <MovieIcon edge="start" className={classes.menuButton} color="inherit">
                            <MenuIcon />
                        </MovieIcon>
                        <Link to='/' className={classes.title} onClick={() => setSearchValue('')}>
                            <Typography variant='h6' noWrap>Movie List API</Typography>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}><SearchIcon /></div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;