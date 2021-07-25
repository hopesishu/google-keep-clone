import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    card: {
        backgroundColor: "#D3E6E4",
        '& button': {
            opacity: 0,
            transition: "0.3s"
        },
        '&:hover': {
            backgroundColor: "white",
            elevation: 4,
            '& button': {
                opacity: 100,
                transition: "0.3s"
            }
        }
    },
    cardTitle: {
        fontWeight: 600
    },
    cardContent: {
        whiteSpace: "pre-wrap",
        overflow: "auto",
        wordWrap: "break-word"
    },
    date: {
        marginLeft: "auto"
    }
}));