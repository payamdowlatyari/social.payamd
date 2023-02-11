import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  fullHeightCard: {
    display: 'flex',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    padding: '0.5%',
    margin: '10px',
    marginTop: '5px',
  },
  overlay: {
    position: 'relative',
    top: '20px',
    left: '20px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1em',
  },
  likeCount: {
    color: '#05668d',
  },
  title: {
    display: 'block',
    position: 'relative',
  },
  messageText: {
    display: 'block',
  },
  cardActions: {
    color: '#05668d',
    padding: '8px 16px 8px',
    alignItems: 'flex-end',
  },
  createdBy:{
    fontSize: '1em',
    paddingTop: '1em',
    color: '#2f4550'
  },
  createdAt:{
    fontSize: '0.8em',
    color: '#adb5bd'
  },
  tags: {
    paddingTop: '5px',
    color: '#bc4749',
  },
  deleteIcon: {
    color: '#05668d',
  },
  editIcon: {
    color: '#05668d',
  },
});
