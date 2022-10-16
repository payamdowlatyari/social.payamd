import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    border: 'none',
    boxShadow: 'none'
  },
  dash: {
    backgroundColor: '#233d4d',
    padding: theme.spacing(1),
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  post: {
    display: 'flex-end',
  },
}));
