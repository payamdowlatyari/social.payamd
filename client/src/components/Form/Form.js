import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {

  const author = localStorage.getItem('username');
  const [postData, setPostData] = useState({ title: '', message: '', creator: author, tags: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
   
    setPostData({ title: '', message: '', creator: '', tags: ''});
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
    return;
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography className={classes.formTitle}>{currentId ? `Editing "${post.title}"` : 'Start a new post'}</Typography>
      <div className={classes.formGroup}>
      <TextField name="title" variant="standard" label="Title" size="small" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />  
        <TextField name="tags" variant="standard" label="Tags (coma separated)" size="small" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <TextField name="message" variant="standard" label="Message" size="small" fullWidth multiline minRows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </div>
        <div className={classes.buttons}>
        <Button className={classes.buttonSubmit} variant="contained" size="small" type="submit">Submit</Button>
        <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear}>Clear</Button>          
        </div>
      </form>
    </Paper>
  );
};

export default Form;
