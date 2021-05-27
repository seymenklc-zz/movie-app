import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

import Navbar from './Components/Navbar/Navbar';
import MovieCard from './Components/Movies/MovieCard';
import Footer from './Components/Footer/Footer';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieDetails from './Components/MovieDetails/MovieDetails';

const theme = createMuiTheme({ palette: { secondary: deepPurple } });

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <Navbar setSearchValue={setSearchValue} searchValue={searchValue} />
                </ThemeProvider>
                <Switch>
                    <Route exact path='/'>
                        <MovieCard searchValue={searchValue} />
                    </Route>
                    <Route exact path='/addmovie'>
                        <AddMovie />
                    </Route>
                    <Route exact path='/movies/:id'>
                        <MovieDetails />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
};

export default App;