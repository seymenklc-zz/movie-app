import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        marginTop: '30px',
        backgroundColor: '#f9f9f9',
        cursor: 'pointer',
    },
    cardMedia: {
        height: '300px',
        paddingTop: '56.25%',
    },
    overview: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '300ch',
    },
    title: {
        marginTop: '20px',
        textDecoration: 'none'
    },
    rating: {
        flexShrink: 1,
        marginLeft: '260px',
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export default useStyles;