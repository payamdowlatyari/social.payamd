import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography className={classes.formTitle}>{currentId ? `Editing "${post.title}"` : 'Start a new post'}</Typography>
        <TextField name="creator" variant="outlined" label="Author" size="small" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

      <div className={classes.formGroup}>
        <TextField name="title" variant="outlined" label="Title" size="small" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" size="small" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
      </div>
        
        <TextField name="message" variant="outlined" label="Message" size="small" fullWidth multiline rows={2} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

        <div className={classes.buttons}>
          
        <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit">Submit</Button>
        <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear}>Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
