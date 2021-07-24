import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        fontWeight: 600,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'center',
    },
    newPost: {
        margin: "10px",
        float: "right"
    }
}));