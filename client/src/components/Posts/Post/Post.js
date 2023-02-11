import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, ButtonBase } from '@material-ui/core/';
// import { useHistory } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';


const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const [likes, setLikes] = useState(post?.likedBy);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const liked = post.likedBy || [];
  const hasLikedPost = liked.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) 
      setLikes(post.likedBy.filter((id) => id !== userId));
     else 
      setLikes([post.likedBy, userId]);
    
  };

  const Likes = () => {
    if (likes && likes.length > 0) {

      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon className={classes.likeCount} fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined className={classes.likeCount} fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }
    return <><ThumbUpAltOutlined className={classes.likeCount} fontSize="small" />&nbsp;Like</>;
  };

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card}>
       <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      ></ButtonBase>
    <Typography title={post.title}></Typography>
    <div className={classes.overlay}>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography> 
    </div>
    <div className={classes.details}>
    <CardContent>
   
    <Typography className={classes.messageText} variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>    
    <Typography className={classes.tags} variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    <Typography className={classes.createdBy} variant="body2">{post.creator}</Typography>
    <Typography className={classes.createdAt} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
   
    </CardContent>
    </div>
    <CardActions className={classes.cardActions}>
    <Button size="small" color="inherit" disabled={!user?.result} onClick={handleLike}>
          <Likes/>
        </Button>
      {(user?.result?._id === post?.creator) && (
          <Button onClick={(e) => { e.stopPropagation(); setCurrentId(post._id);}} size="small">
            <EditIcon className={classes.editIcon} fontSize="small" />
          </Button>
        )} 
        {(user?.result?._id === post?.creator) && (
          <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon className={classes.deleteIcon} fontSize="small" /> 
          </Button>
        )}
        {/* {(user?.result?._id === post?.creator) && (
       <> */}
      <Button size="small" onClick={() => setCurrentId(post._id)}><EditIcon className={classes.editIcon} fontSize="small" /></Button>
      <Button size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon className={classes.deleteIcon} fontSize="small" /> 
      </Button>
      {/* </>
      )} */}
    </CardActions>
  </Card>
  );
};

export default Post;
