import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography title={post.title}></Typography>
      <div className={classes.overlay}>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography> 
      </div>
      <div className={classes.details}>
      <CardContent>
      <Typography className={classes.messageText} variant="body2" color="textSecondary" component="p">{post.message}</Typography>    
      <Typography className={classes.tags} variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      <Typography className={classes.createdBy} variant="body2">{post.creator}</Typography>
      <Typography className={classes.createdAt} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </CardContent>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon className={classes.likeCount} fontSize="small" />{post.likeCount} </Button>
        <Button size="small" onClick={() => setCurrentId(post._id)}><EditIcon className={classes.editIcon} fontSize="small" /></Button>
        <Button size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon className={classes.deleteIcon} fontSize="small" /> </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
