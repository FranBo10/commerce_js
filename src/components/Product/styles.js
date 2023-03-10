import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        maxWidth: 350
    },

    action: {
        marginTop: '1rem'
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: 'auto',
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        })
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    media: {
        height: 0,
        paddingTop: '56,25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));