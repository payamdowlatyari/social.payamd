import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    width: '100%',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    minWidth: '150px',
    margin: 5,
    backgroundColor: '#2ec4b6',
    color: '#fff',
  },
  buttonClear: {
    minWidth: '150px',
    margin: 5,
    backgroundColor: '#e07a5f',
    color: '#fff',
  },
  buttons: {
    display: 'inline-block',
  },
  formTitle: {
    margin: 'auto',
    fontSize: '1.2em',
  },
  formGroup: {
    margin: 'auto',
    display: 'block',
  }
}));
