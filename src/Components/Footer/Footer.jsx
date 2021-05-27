import React from 'react';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>Movie List</Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus?
            </Typography>
        </footer>
    );
};

export default Footer;