import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'none',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    minHeight: '20em',
    padding: '2.5%',
  },
  overlay: {
    position: 'relative',
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    color: '#05668d',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    overflowX: 'scroll',
  },
  likeCount: {
    paddingRight: '5px',
    color: '#05668d',
  },
  title: {
    display: 'block',
    position: 'relative',
  },
  messageText: {
    display: 'block',
    textOverflow: 'ellipsis',
  },
  cardActions: {
    color: '#05668d',
    padding: '8px 16px 8px',
    display: 'flex',
    justifyContent: 'space-between',
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
    display: 'block',
    color: '#bc4749',
  },
  deleteIcon: {
    color: '#05668d',
  },
  editIcon: {
    color: '#05668d',
  },
});
