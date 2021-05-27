import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import useStyles from './styles';

const FabIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <Link to='/addmovie'>
                <Fab className={classes.fab} color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </div>
    );
};

export default FabIcon;
