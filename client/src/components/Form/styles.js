import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    margin: '0 auto',
    border: 'none'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    minWidth: '12em',
    margin: '5px',
    backgroundColor: '#2ec4b6',
    color: '#fff',
  },
  buttonClear: {
    minWidth: '12em',
    margin:'5px',
    backgroundColor: '#e07a5f',
    color: '#fff',
  },
  buttons: {
    display: 'flex-start',
    margin: 'auto'
  },
  formTitle: {
    fontSize: '1.2em',
    padding: '1em'
  },
  formGroup: {
    margin: 'auto',
  }
}));
