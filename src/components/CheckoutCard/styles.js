import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        maxWidth: 400
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));