import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import Container from '@material-ui/core/Container';

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
                        <Link to='/' className={classes.title}>
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