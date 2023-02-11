import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ title: '', message: '' , tags: []});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post, dispatch]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: []});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, creator: user?.result?.firstname }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, creator: user?.result?.firstname }));
      clear();
    }
  };

  if (!user?.result?.firstname) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Login!
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} >
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography className={classes.formTitle}>{currentId ? `Editing "${post.title}"` : 'Start a new post'}</Typography>
      <div className={classes.formGroup}>
      <TextField 
        name="title" 
        variant="standard" 
        label="Title" 
        size="small" 
        value={postData.title} 
        onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />  
        <TextField 
          name="message" 
          variant="standard" 
          label="Message"  
          size="small" 
          fullWidth 
          minRows={4} 
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
          />
        <ChipInput
            name="tags"
            variant="standard"
            label="Tags"
            size="small"
            fullWidth 
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
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
