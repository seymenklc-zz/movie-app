import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0',
        postion: 'fixed',
        marginTop: '100rem',
        bottom: 0,
    }
}));

export default useStyles;