import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '0',
    display: 'flex',
    border: 'none',
    boxShadow: 'none',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: "#233d4d",
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  heading: {
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'contents',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 5,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2em',
    color: '#eee',
    textTransform: 'uppercase',
  },
  menu : {
    color: '#eee',
    position: 'absolute',
  }
}));