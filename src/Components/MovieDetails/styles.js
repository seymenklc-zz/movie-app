import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        marginTop: '30px',
        backgroundColor: '#f9f9f9',
        cursor: 'pointer',
    },
    cardMedia: {
        height: '400px',
        paddingTop: '56.25%',
        width: '400px',
        backgroundColor: '#f9f9f9'
    },
    button: {
        flex: 1
    },
    form: {
        position: 'relative',
    }

}));

export default useStyles;