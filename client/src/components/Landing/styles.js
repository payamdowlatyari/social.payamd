import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1em',
    marginTop: '1em',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1em',
    marginBottom: '1em',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  chipSearch: {
    marginTop: '10px',

  },
  searchButton: {
    marginTop: '10px',
  },
  sideBar: {
    position: 'sticky',
  }
}));