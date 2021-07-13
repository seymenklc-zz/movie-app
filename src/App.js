import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

import Navbar from './Components/Navbar/Navbar';
import MovieCard from './Components/Movies/MovieCard';

const theme = createMuiTheme({ palette: { secondary: deepPurple } });

const App = () => {
    const [searchValue, setSearchValue] = useState('Spider-Man');

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar setSearchValue={setSearchValue} searchValue={searchValue} />
            </ThemeProvider>
            <Switch>
                <Route exact path='/' render={(props) => (
                    <MovieCard {...props} truncateOverview={truncateOverview} searchValue={searchValue} />
                )} />
            </Switch>
        </Router>
    );
};

export default App;