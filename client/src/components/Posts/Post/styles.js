import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    card: {
        backgroundColor: "#D3E6E4",
        transition: "0.3s",
        color: "#1B585D",
        '& button': {
            opacity: 0,
            transition: "0.3s"
        },
        '&:hover': {
            backgroundColor: "#6DBFB5",
            color: "#000000",
            transition: "0.3s",
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
    cardActions: {
        paddingLeft: "16px",
        paddingRight: "16px"
    },
    date: {
        marginRight: "auto"
    }
}));